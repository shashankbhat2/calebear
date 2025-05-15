import { Injectable, InternalServerErrorException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../prisma/prisma.service';
import { google, Auth } from 'googleapis';
import { IntegrationType } from 'generated/prisma';

interface FreeBusySlot {
  start: string;
  end: string;
}

@Injectable()
export class GoogleCalendarService {
  private readonly oauth2Client: Auth.OAuth2Client;

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const googleClientId = this.configService.get<string>('GOOGLE_CLIENT_ID');
    const googleClientSecret = this.configService.get<string>('GOOGLE_CLIENT_SECRET');
    const googleOAuthRedirectUri = this.configService.get<string>('GOOGLE_CALLBACK_URL');
    if (!googleClientId || !googleClientSecret || !googleOAuthRedirectUri) {
      throw new InternalServerErrorException('Google OAuth2 credentials not configured');
    }

    this.oauth2Client = new google.auth.OAuth2(
      googleClientId,
      googleClientSecret,
      googleOAuthRedirectUri,
    );
  }

  getAuthorizationUrl(userId: string, additionalStateData?: Record<string, any>): string {
    const scopes = [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ];

    const stateObject = { userId, ...(additionalStateData || {}) };
    const state = Buffer.from(JSON.stringify(stateObject)).toString('base64');

    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline', // Required for refresh token
      prompt: 'consent',      // Prompts for consent every time (dev; consider removing for prod)
      scope: scopes,
      state: state,
    });
  }

  async handleOAuthCallback(code: string, state: string, currentUserId: string): Promise<void> {
    if (!code) {
      throw new BadRequestException('Authorization code is missing');
    }
    if (!state) {
      throw new BadRequestException('State parameter is missing');
    }

    let decodedState: { userId: string, [key: string]: any };
    try {
      decodedState = JSON.parse(Buffer.from(state, 'base64').toString('ascii'));
    } catch (error) {
      throw new BadRequestException('Invalid state parameter');
    }

    if (decodedState.userId !== currentUserId) {
      throw new UnauthorizedException('State mismatch or unauthorized user.');
    }

    try {
      const { tokens } = await this.oauth2Client.getToken(code);
      const { access_token, refresh_token, expiry_date } = tokens;

      if (!access_token) {
        throw new InternalServerErrorException('Failed to retrieve access token from Google.');
      }

      // Set credentials for subsequent API calls
      this.oauth2Client.setCredentials(tokens);

      // Fetch Google User Info to get externalId
      const oauth2 = google.oauth2({
        auth: this.oauth2Client,
        version: 'v2',
      });
      const userInfoResponse = await oauth2.userinfo.get();
      const googleUserId = userInfoResponse.data.id; // This will be our externalId
      const userEmail = userInfoResponse.data.email; // Optional: for naming or metadata

      if (!googleUserId) {
        throw new InternalServerErrorException('Failed to retrieve Google User ID.');
      }

      // Fetch the IntegrationProvider for Google Calendar
      // Ensure 'google_calendar' matches the providerKey in your IntegrationProvider table
      const googleCalendarProvider = await this.prisma.integrationProvider.findUnique({
        where: { providerKey: 'google_calendar' },
      });

      if (!googleCalendarProvider) {
        console.error("CRITICAL: Google Calendar IntegrationProvider not found in database with providerKey 'google_calendar'. This provider must be seeded.");
        throw new InternalServerErrorException('Google Calendar provider not configured in the system.');
      }

      if (googleCalendarProvider.type !== IntegrationType.CALENDAR) {
        console.error(`CRITICAL: Google Calendar IntegrationProvider (key: 'google_calendar') has incorrect type '${googleCalendarProvider.type}'. Expected '${IntegrationType.CALENDAR}'.`);
        throw new InternalServerErrorException('Google Calendar provider is misconfigured (incorrect type).');
      }
      
      const integrationName = userEmail ? `Google Calendar (${userEmail})` : `Google Calendar (${googleUserId})`;

      await this.prisma.integration.upsert({
        where: {
          user_provider_external_id_key: {
            userId: currentUserId,
            integrationProviderId: googleCalendarProvider.id,
            externalId: googleUserId,
          },
        },
        update: {
          accessToken: access_token,
          refreshToken: refresh_token || undefined,
          name: integrationName,
          metadata: { 
            ...(typeof expiry_date === 'number' ? { expiry_date: new Date(expiry_date).toISOString() } : {}),
            google_user_email: userEmail || undefined,
           },
          updatedAt: new Date(),
        },
        create: {
          userId: currentUserId,
          integrationProviderId: googleCalendarProvider.id,
          externalId: googleUserId,
          name: integrationName,
          accessToken: access_token,
          refreshToken: refresh_token || undefined,
          metadata: { 
            ...(typeof expiry_date === 'number' ? { expiry_date: new Date(expiry_date).toISOString() } : {}),
            google_user_email: userEmail || undefined,
           },
        },
      });

    } catch (error) {
      console.error('Error during Google OAuth callback:', error.message, error.stack, error.response?.data);
      if (error.response?.data?.error === 'invalid_grant') {
        throw new BadRequestException('Invalid or expired authorization code. Please try connecting Google Calendar again.');
      }
      // Preserve original error if it's already a NestJS HttpException
      if (error instanceof BadRequestException || error instanceof UnauthorizedException || error instanceof InternalServerErrorException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to process Google OAuth callback.', error.message);
    }
  }

  async fetchFreeBusyForCalendar(
    accessToken: string,
    calendarId: string,
    startDate: string,
    endDate: string,
  ): Promise<FreeBusySlot[]> {
    const userAuthClient = new google.auth.OAuth2(
      this.configService.get<string>('GOOGLE_CLIENT_ID'),
      this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
      this.configService.get<string>('GOOGLE_CALLBACK_URL'),
    );
    userAuthClient.setCredentials({ access_token: accessToken });

    const calendarApi = google.calendar({ version: 'v3', auth: userAuthClient });

    try {
      const timeMin = new Date(startDate).toISOString();
      const timeMax = new Date(endDate).toISOString();

      const response = await calendarApi.freebusy.query({
        requestBody: {
          timeMin,
          timeMax,
          items: [{ id: calendarId }],
        },
      });

      const busySlots: FreeBusySlot[] = [];
      if (response.data.calendars && response.data.calendars[calendarId] && response.data.calendars[calendarId].busy) {
        for (const slot of response.data.calendars[calendarId].busy!) {
          if (slot.start && slot.end) {
            busySlots.push({ start: slot.start, end: slot.end });
          }
        }
      }
      return busySlots;
    } catch (error: any) {
      // Log the detailed error for server-side inspection
      console.error(
        `Google Calendar API Error: Failed to fetch free/busy for calendar ${calendarId}. User token might be invalid or expired. Details: ${error.message}`,
        error.response?.data?.error, // Google API specific error
        error.stack
      );

      if (error.code === 401 || (error.response?.data?.error?.errors?.[0]?.reason === 'authError')) {
        throw new UnauthorizedException(
          'Google API authentication failed. The access token may be invalid or expired.',
        );
      }
      
      // Check for specific Google API error messages if needed
      const googleApiError = error.response?.data?.error?.message;
      if (googleApiError) {
         throw new InternalServerErrorException(`Google Calendar API Error: ${googleApiError}`);
      }

      throw new InternalServerErrorException('An unexpected error occurred while fetching free/busy data from Google Calendar.');
    }
  }
} 
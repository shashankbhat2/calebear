import { Injectable, InternalServerErrorException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../prisma/prisma.service';
import { google, Auth } from 'googleapis';
import { IntegrationType } from 'generated/prisma';
import { ICalendarService } from '../icalendar.interface';

@Injectable()
export class GoogleCalendarService implements ICalendarService {
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
      'https://www.googleapis.com/auth/calendar.readonly',
      'https://www.googleapis.com/auth/calendar.events.readonly',
      // Add other scopes as needed, e.g., for writing events or accessing user info
      'https://www.googleapis.com/auth/userinfo.email', // To get user's Google email for verification
      'https://www.googleapis.com/auth/userinfo.profile', // To get user's profile info
    ];

    const stateObject = { userId, ...(additionalStateData || {}) };
    const state = Buffer.from(JSON.stringify(stateObject)).toString('base64');

    return this.oauth2Client.generateAuthUrl({
      access_type: 'offline', // Required to get a refresh token
      prompt: 'consent',      // Ensures the user is prompted for consent every time (good for dev, consider removing for prod)
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

    // Security Check: Ensure the state's userId matches the currently logged-in user
    // This is a basic check. Depending on your auth flow, you might have more robust session management.
    if (decodedState.userId !== currentUserId) {
      throw new UnauthorizedException('State mismatch or unauthorized user.');
    }

    try {
      const { tokens } = await this.oauth2Client.getToken(code);
      const { access_token, refresh_token, expiry_date } = tokens;

      if (!access_token) {
        throw new InternalServerErrorException('Failed to retrieve access token from Google.');
      }

      // Optional: Get Google User Info to store externalId or verify email
      // const people = google.people({ version: 'v1', auth: this.oauth2Client });
      // this.oauth2Client.setCredentials(tokens);
      // const me = await people.people.get({
      //   resourceName: 'people/me',
      //   personFields: 'emailAddresses,names',
      // });
      // const googleEmail = me.data.emailAddresses?.[0]?.value;
      // const googleProfileId = me.data.names?.[0]?.metadata?.source?.id; // Or some other stable ID

      await this.prisma.integration.upsert({
        where: {
          userId_type: {
            userId: currentUserId,
            type: IntegrationType.GOOGLE_CALENDAR,
          },
        },
        update: {
          accessToken: access_token,
          refreshToken: refresh_token || undefined, // Handle if refresh_token is null
          metadata: { expiry_date: expiry_date ? new Date(expiry_date).toISOString() : undefined },
          updatedAt: new Date(),
        },
        create: {
          userId: currentUserId,
          type: IntegrationType.GOOGLE_CALENDAR,
          accessToken: access_token,
          refreshToken: refresh_token || undefined,
          metadata: { expiry_date: expiry_date ? new Date(expiry_date).toISOString() : undefined },
        },
      });

      // TODO: Trigger initial sync or other post-auth actions

    } catch (error) {
      console.error('Error during Google OAuth callback:', error);
      // Differentiate between client errors (e.g., bad code) and server errors
      if (error.response?.data?.error === 'invalid_grant') {
        throw new BadRequestException('Invalid or expired authorization code.');
      }
      throw new InternalServerErrorException('Failed to process Google OAuth callback.', error.message);
    }
  }

  // Methods for Google Calendar integration will go here
  // e.g., syncEvents, etc.
} 
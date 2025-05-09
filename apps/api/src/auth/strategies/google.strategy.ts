import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback, Profile } from 'passport-google-oauth20';
// Import ConfigService if you plan to use @nestjs/config for .env variables
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(/* private configService: ConfigService */) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID_FALLBACK',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET_FALLBACK',
      callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/api/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile, // Use Profile type from passport-google-oauth20
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos, id: googleId } = profile;
    const userProfile = {
      googleId,
      email: emails && emails[0] ? emails[0].value : null,
      firstName: name && name.givenName ? name.givenName : null,
      lastName: name && name.familyName ? name.familyName : null,
      picture: photos && photos[0] ? photos[0].value : null,
      accessToken,
      // refreshToken, // Usually not stored directly with the user profile returned to auth service
    };
    if (!userProfile.email) {
      // Handle case where email is not provided by Google (rare, but possible depending on scope and user settings)
      return done(new Error('Google profile did not return an email address'), false);
    }
    done(null, userProfile); // Pass the extracted profile to AuthService.validateOAuthLogin
  }
} 
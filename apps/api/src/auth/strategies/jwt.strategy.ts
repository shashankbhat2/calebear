import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// Import ConfigService if you plan to use @nestjs/config for .env variables
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(/* private configService: ConfigService */) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: configService.get<string>('JWT_SECRET'), // If using @nestjs/config
      secretOrKey: process.env.JWT_SECRET || 'YOUR_FALLBACK_SECRET_KEY', // Match AuthModule
    });
  }

  async validate(payload: any) {
    // The payload is the decoded JWT. You can add more validation here if needed.
    // For example, check if the user still exists in the database using UserService.
    return { userId: payload.sub, email: payload.email, firstName: payload.firstName, lastName: payload.lastName };
  }
} 
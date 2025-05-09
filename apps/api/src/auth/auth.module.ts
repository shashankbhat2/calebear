import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module'; // Import UserModule
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
// Import ConfigModule and ConfigService if you plan to use @nestjs/config for .env variables
// import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule, // Add UserModule here
    PassportModule.register({ session: false }), // Explicitly disable sessions for Passport
    JwtModule.registerAsync({
      // If using @nestjs/config for environment variables:
      // imports: [ConfigModule],
      // inject: [ConfigService],
      // useFactory: async (configService: ConfigService) => ({
      //   secret: configService.get<string>('JWT_SECRET'),
      //   signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '60m' },
      // }),
      // For now, using placeholder direct values:
      useFactory: async () => ({
        secret: process.env.JWT_SECRET || 'YOUR_FALLBACK_SECRET_KEY', // Prioritize .env
        signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '60m' },
      }),
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}

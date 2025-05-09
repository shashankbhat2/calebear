import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { User } from '../../../generated/prisma'; // Adjusted path

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email', // We use email as the username
      // passwordField: 'password' // default is 'password'
    });
  }

  async validate(email: string, pass: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.authService.validateUserByPassword(email, pass);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
} 
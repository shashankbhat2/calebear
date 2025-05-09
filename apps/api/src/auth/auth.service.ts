import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Import UserService
import * as argon2 from 'argon2'; // Import argon2
import { User } from '../../generated/prisma'; // Adjusted path

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService, // Inject UserService
    private jwtService: JwtService,
  ) {}

  async validateUserByPassword(email: string, pass: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findOneByEmail(email);
    if (user && user.password && (await argon2.verify(user.password, pass))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Omit<User, 'password'>) {
    const payload = { email: user.email, sub: user.id, firstName: user.firstName, lastName: user.lastName }; // Customize as needed
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  // For Google OAuth validation/user creation
  async validateOAuthLogin(profile: {
    email: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
    googleId: string;
  }, provider: string): Promise<string> { // Returning JWT directly
    try {
      console.log(`Validating ${provider} profile:`, profile);
      const user = await this.userService.findOrCreateByGoogleProfile(profile);
      if (!user) {
        throw new UnauthorizedException(`Could not find or create user for ${provider}`);
      }
      const payload = { email: user.email, sub: user.id, firstName: user.firstName, lastName: user.lastName }; // Customize as needed
      return this.jwtService.sign(payload);
    } catch (err) {
      console.error('Error during OAuth validation:', err);
      throw new UnauthorizedException('Error during OAuth validation: ' + (err.message || ''));
    }
  }
}

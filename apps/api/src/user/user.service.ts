import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../../generated/prisma';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findOneById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(data: Partial<User>): Promise<User> {
    if (data.password) {
      data.password = await argon2.hash(data.password);
    }
    const createData: any = { ...data };
    for (const key in createData) {
      if (createData[key] === undefined) {
        delete createData[key];
      }
    }
    return this.prisma.user.create({ data: createData });
  }

  // For Google OAuth: find a user by Google ID or email, or create a new one
  async findOrCreateByGoogleProfile(profile: {
    email: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
    googleId: string;
  }): Promise<User> {
    let user = await this.prisma.user.findUnique({
      where: { googleId: profile.googleId },
    });

    if (!user) {
      user = await this.prisma.user.findUnique({ where: { email: profile.email } });
      if (user) {
        user = await this.prisma.user.update({
          where: { id: user.id },
          data: {
            googleId: profile.googleId,
            picture: user.picture ?? profile.picture,
            firstName: user.firstName ?? profile.firstName,
            lastName: user.lastName ?? profile.lastName,
          },
        });
      } else {
        user = await this.prisma.user.create({
          data: {
            email: profile.email,
            firstName: profile.firstName,
            lastName: profile.lastName,
            picture: profile.picture,
            googleId: profile.googleId,
          },
        });
      }
    }
    return user;
  }
} 
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'generated/prisma';
import { UpdateOnboardingDto } from 'src/dto/onboarding.dto';

@Injectable()
export class OnboardingService {
    constructor(private prisma: PrismaService) {}

    async createOnboarding(userId: string) {
        const onboardingId = 'default';
        return this.prisma.userOnboarding.create({
            data: { userId, onboardingId },
        });
    }

    async getOnboarding(userId: string) {
        return this.prisma.userOnboarding.findUnique({
            where: { userId },
        });
    }

    async getCurrentOnboardingStep(userId: string) {
        const onboarding = await this.getOnboarding(userId);
        return onboarding?.currentStep;
    }

    async updateOnboarding(userId: string, data: UpdateOnboardingDto) {
        return this.prisma.userOnboarding.update({
            where: { userId },
            data: data,
        });
    }
}

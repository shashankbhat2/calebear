import { Controller, Get, Post } from '@nestjs/common';
import { Body, Param } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { UpdateOnboardingDto } from 'src/dto/onboarding.dto';

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post()
  async createOnboarding(@Body() body: { userId: string }) {
    return this.onboardingService.createOnboarding(body.userId);
  }

  @Get(':userId')
  async getOnboarding(@Param('userId') userId: string) {
    return this.onboardingService.getOnboarding(userId);
  }

  @Get(':userId/current-step')
  async getCurrentOnboardingStep(@Param('userId') userId: string) {
    return this.onboardingService.getCurrentOnboardingStep(userId);
  }

  @Post(':userId/update-step')
  async updateOnboardingStep(@Param('userId') userId: string, @Body() body: UpdateOnboardingDto) {
    return this.onboardingService.updateOnboarding(userId, body);
  }
}

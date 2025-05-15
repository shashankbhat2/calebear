import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { OnboardingModule } from './onboarding/onboarding.module';

@Module({
  providers: [UserService],
  exports: [UserService],
  imports: [OnboardingModule],
})
export class UserModule {} 
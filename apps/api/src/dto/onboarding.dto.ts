import { IsJSON, IsString } from "class-validator";



export class UpdateOnboardingDto {
  @IsString()
  currentStep: string;

  @IsJSON()
  data: Record<string, any>;
}       
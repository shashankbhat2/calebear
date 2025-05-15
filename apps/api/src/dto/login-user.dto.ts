import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user for login.',
    format: 'email',
  })
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  email: string;

  @ApiProperty({
    example: 'P@sswOrd123!',
    description: 'The password for the user account.',
    minLength: 8,
    maxLength: 50,
    type: 'string',
  })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @MaxLength(50, { message: 'Password cannot be longer than 50 characters.' })
  password: string;
} 
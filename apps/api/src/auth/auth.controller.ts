import { Controller, Post, UseGuards, Request, Get, Res, Body, UsePipes, ValidationPipe, HttpStatus, ConflictException, InternalServerErrorException, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginUserDto } from '../dto/login-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiBearerAuth, ApiOkResponse, ApiCreatedResponse, ApiUnauthorizedResponse, ApiConflictResponse, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

// Define a type for successful login response for Swagger
class LoginSuccessResponse {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;
  @ApiProperty() // You might want to define a UserResponseDto without password for this
  user: any; // Replace 'any' with a proper User DTO if available
}

// Define a type for successful signup response for Swagger
class SignupSuccessResponse {
  @ApiProperty({ example: 'User created successfully' })
  message: string;
  @ApiProperty() // You might want to define a UserResponseDto without password for this
  user: any; // Replace 'any' with a proper User DTO if available
}

// Define a type for Google OAuth callback response
class GoogleAuthCallbackResponse {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;
}

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ description: 'User created successfully.', type: SignupSuccessResponse })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input data. (Validation errors)' })
  @ApiConflictResponse({ description: 'Email already exists.' })
  @ApiInternalServerErrorResponse({ description: 'Could not create user due to an internal error.' })
  @ApiBody({ type: CreateUserDto })
  async signup(@Body() createUserDto: CreateUserDto): Promise<SignupSuccessResponse> {
    try {
      const user = await this.userService.createUser(createUserDto);
      const { password, ...result } = user;
      return { message: 'User created successfully', user: result }; 
    } catch (error) {
      if (error instanceof ConflictException || error instanceof InternalServerErrorException) {
        throw error; // Re-throw known exceptions
      }
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        throw new ConflictException('Email already exists.');
      }
      console.error("Signup Error:", error);
      throw new InternalServerErrorException(error.message || 'Could not create user.');
    }
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Log in an existing user' })
  @ApiOkResponse({ description: 'Login successful, returns JWT and user info.', type: LoginSuccessResponse })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input data. (Validation errors for email/password format)' })
  @ApiBody({ type: LoginUserDto })
  async login(@Request() req, @Body() loginUserDto: LoginUserDto): Promise<LoginSuccessResponse> {
    return this.authService.login(req.user);
  }

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  @ApiOperation({ summary: 'Initiate Google OAuth2 login flow' })
  @ApiResponse({ status: 302, description: 'Redirects to Google for authentication.' })
  async googleAuth(@Request() _req) {}

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Google OAuth2 callback URL' })
  @ApiOkResponse({ description: 'Google login successful, returns JWT.', type: GoogleAuthCallbackResponse })
  @ApiUnauthorizedResponse({ description: 'Google authentication failed.' })
  async googleAuthRedirect(@Request() req, @Res({ passthrough: true }) res): Promise<GoogleAuthCallbackResponse> {
    const jwt = await this.authService.validateOAuthLogin(req.user, 'google');
    return { access_token: jwt };
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get current authenticated user profile' })
  @ApiBearerAuth() 
  @ApiOkResponse({ description: 'Returns the authenticated user profile.' }) // Define a UserProfileResponse DTO for better schema
  @ApiUnauthorizedResponse({ description: 'Unauthorized. Invalid or missing token.' })
  getProfile(@Request() req) {
    return req.user;
  }
}

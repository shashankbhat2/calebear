import { Controller, Post, UseGuards, Request, Get, Res, Body, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GoogleOAuthGuard } from './guards/google-oauth.guard';
import { UserService } from '../user/user.service'; // For user creation (signup)
import { CreateUserDto } from './dto/create-user.dto'; // Import CreateUserDto
import { LoginUserDto } from './dto/login-user.dto';   // Import LoginUserDto
// Create DTOs for signup and login for better validation and structure

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService, // Inject UserService for signup
  ) {}

  // Optional: Add a signup route
  @Post('signup')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true })) // Apply validation pipe
  async signup(@Body() createUserDto: CreateUserDto) {
    try {
      // DTO now ensures email and password (and their formats) are present if not optional
      const user = await this.userService.createUser(createUserDto);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user; 
      return { statusCode: HttpStatus.CREATED, message: 'User created successfully', user: result };
    } catch (error) {
      if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
        return { statusCode: HttpStatus.CONFLICT, message: 'Email already exists.' };
      }
      // Consider more specific error handling or a generic error filter
      console.error("Signup Error:", error); 
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: error.message || 'Could not create user.' };
    }
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true })) // Apply validation pipe for payload structure
  async login(@Request() req, @Body() loginUserDto: LoginUserDto) { // loginUserDto for payload validation
    // LocalAuthGuard and LocalStrategy handle the actual authentication
    // req.user is populated by LocalStrategy upon successful validation
    return this.authService.login(req.user);
  }

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Request() _req) {
    // Initiates the Google OAuth2 login flow
    // Passport handles the redirect
  }

  @Get('google/callback')
  @UseGuards(GoogleOAuthGuard)
  async googleAuthRedirect(@Request() req, @Res() res) {
    const jwt = await this.authService.validateOAuthLogin(req.user, 'google');
    // Redirect to a frontend URL with the JWT, or return it directly
    // Example: res.redirect(`http://localhost:3001/auth/callback?token=${jwt}`); // Assuming frontend on port 3001
    return res.json({ access_token: jwt });
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; // User object attached by JwtStrategy.validate
  }
}

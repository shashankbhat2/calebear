import { Controller, Get, Param, Query, Res, Req, UnauthorizedException, UseGuards, NotFoundException, BadRequestException } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';
import { Response, Request } from 'express';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Assuming you have a JWT guard
// import { User } from '../common/decorators/user.decorator'; // Assuming you have a User decorator for req.user

@Controller('integrations')
// @UseGuards(JwtAuthGuard) // Secure all routes in this controller
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Get(':category/:provider/auth')
  // @UseGuards(JwtAuthGuard) // Or apply guard per route
  async initiateOAuth(
    @Param('category') category: string,
    @Param('provider') provider: string,
    @Req() req: Request, // Or @User() user: YourUserEntityType
    @Res() res: Response,
    @Query('redirectPath') redirectPath?: string, // Optional: where to redirect after successful callback
  ) {
    // @ts-ignore // Assuming req.user is populated by your auth guard
    const userId = req.user?.id;
    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    let authUrl: string;
    const additionalStateData = redirectPath ? { redirectPath } : {};

    if (category.toLowerCase() === 'calendar') {
      const calendarService = this.integrationsService.getCalendarProvider(provider);
      authUrl = calendarService.getAuthorizationUrl(userId, additionalStateData);
    } else {
      // Handle other categories like 'conferencing' in the future
      throw new NotFoundException(`Integration category '${category}' not supported.`);
    }

    res.redirect(authUrl);
  }

  @Get(':category/:provider/oauth-callback')
  // @UseGuards(JwtAuthGuard) // OAuth callback should also be protected or have robust state validation
  async handleOAuthCallback(
    @Param('category') category: string,
    @Param('provider') provider: string,
    @Query('code') code: string,
    @Query('state') state: string,
    @Query('error') error: string,
    @Req() req: Request, // Or @User() user: YourUserEntityType
    @Res() res: Response,
  ) {
    // @ts-ignore // Assuming req.user is populated by your auth guard
    const currentUserId = req.user?.id;
    if (!currentUserId) {
      // This should ideally not happen if state validation is also tied to a session/user
      throw new UnauthorizedException('User not authenticated for callback');
    }

    if (error) {
        // Handle errors passed by Google (e.g., access_denied)
        // You might want to redirect to a frontend page with an error message
        throw new BadRequestException(`OAuth Error: ${error}`);
    }

    if (!code) {
      throw new BadRequestException('Authorization code is missing in callback.');
    }
    if (!state) {
      throw new BadRequestException('State parameter is missing in callback.');
    }

    let decodedState: { userId: string, redirectPath?: string, [key: string]: any };
    try {
      decodedState = JSON.parse(Buffer.from(state, 'base64').toString('ascii'));
    } catch (e) {
      throw new BadRequestException('Invalid state parameter.');
    }

    // Basic check, the service method also does this, but good to have early
    if (decodedState.userId !== currentUserId) {
        throw new UnauthorizedException('State mismatch or callback for wrong user.');
    }

    if (category.toLowerCase() === 'calendar') {
      const calendarService = this.integrationsService.getCalendarProvider(provider);
      await calendarService.handleOAuthCallback(code, state, currentUserId);
    } else {
      throw new NotFoundException(`Integration category '${category}' not supported for callback.`);
    }

    // Redirect user after successful auth
    // const successRedirectUrl = decodedState.redirectPath || '/'; // Default to homepage or a settings page
    // res.redirect(successRedirectUrl);
    res.status(200).send('Successfully authenticated and tokens stored. You can close this window.'); // Or redirect
  }
}

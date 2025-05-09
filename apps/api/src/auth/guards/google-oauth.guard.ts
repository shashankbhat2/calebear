import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleOAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const activate = (await super.canActivate(context)) as boolean;
    // For stateless JWT-based authentication, we don't need to establish a server-side session.
    // The AuthGuard populates req.user from the strategy's validate method.
    // const request = context.switchToHttp().getRequest();
    // await super.logIn(request); // This line is for session-based auth, remove for stateless JWT
    return activate;
  }
} 
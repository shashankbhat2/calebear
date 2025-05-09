import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP'); // Context for the logger

  use(request: Request, response: Response, next: NextFunction) {
    const { method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';
    const ip = request.ip;

    const startTime = Date.now();

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      const duration = Date.now() - startTime;

      this.logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength || '-'} - ${duration}ms - ${userAgent} ${ip}`,
      );
    });

    next();
  }
} 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('api');

  // Swagger (OpenAPI) Setup
  const config = new DocumentBuilder()
    .setTitle('Calebear API')
    .setDescription('The official API for Calebear services')
    .setVersion('1.0')
    // .addTag('auth') // Example: Add a tag for grouping endpoints
    // .addTag('users') // Example: Add another tag
    .addBearerAuth() // If you have JWT Bearer auth, this adds the Authorize button
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Serve Swagger UI at /api/docs

  await app.listen(process.env.PORT ?? 3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger documentation available at: ${await app.getUrl()}/api/docs`); // Log Swagger UI path
}
bootstrap();

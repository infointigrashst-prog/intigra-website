import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your domain
  app.enableCors({
    origin: [
      'https://intigracoatings.vercel.app',
      'http://localhost:3001',
      'http://localhost:3002',
      'https://www.intigracoatings.com',
      'https://intigracoatings.com',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('INTIGRA Api')
    .setDescription('API documentation for INTIGRA')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'jwt', // Security name to match Swagger UI settings
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = 7778;
  await app.listen(port);
  console.log(`Server is listening at http://localhost:${port}/api`);
}

bootstrap();

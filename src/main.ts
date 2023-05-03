import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe({transform: true}))

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter))
  
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  app.enableCors(
    { 
      origin: ['http://localhost:3000/'],
      methods: ['POST', 'PUT', 'DELETE', 'GET','PATCH']
    }
  );
  await app.listen(3000);
}
bootstrap();

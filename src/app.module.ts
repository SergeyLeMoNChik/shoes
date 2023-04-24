import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ShoesModule } from './shoes/shoes.module';

@Module({
  imports: [ShoesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

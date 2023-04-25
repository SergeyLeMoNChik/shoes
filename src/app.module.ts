import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesModule } from './shoes/shoes.module';
import { DirectorModule } from './director/director.module';

@Module({
  imports: [ShoesModule, DirectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

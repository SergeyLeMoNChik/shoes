import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesModule } from './shoes/shoes.module';
import { DirectorModule } from './director/director.module';
import { BuyerModule } from './buyer/buyer.module';
import { SallerModule } from './saller/saller.module';

@Module({
  imports: [ShoesModule, DirectorModule, BuyerModule, SallerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

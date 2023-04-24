import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoesModule } from './shoes/shoes.module';
import { SaleModule } from './sale/sale.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [ShoesModule, SaleModule, WorkerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

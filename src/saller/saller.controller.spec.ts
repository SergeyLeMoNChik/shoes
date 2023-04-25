import { Test, TestingModule } from '@nestjs/testing';
import { SallerController } from './saller.controller';
import { SallerService } from './saller.service';

describe('SallerController', () => {
  let controller: SallerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SallerController],
      providers: [SallerService],
    }).compile();

    controller = module.get<SallerController>(SallerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SallerService } from './saller.service';

describe('SallerService', () => {
  let service: SallerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SallerService],
    }).compile();

    service = module.get<SallerService>(SallerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

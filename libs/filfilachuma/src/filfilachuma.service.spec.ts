import { Test, TestingModule } from '@nestjs/testing';
import { FilfilachumaService } from './filfilachuma.service';

describe('FilfilachumaService', () => {
  let service: FilfilachumaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilfilachumaService],
    }).compile();

    service = module.get<FilfilachumaService>(FilfilachumaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

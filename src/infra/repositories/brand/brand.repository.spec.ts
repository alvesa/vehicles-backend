import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { Brand } from '../../entities/brand.entity';
import { BrandRepository } from './brand.repository';

describe(BrandRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Brand>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Brand>,
          provide: 'BRAND_REPOSITORY',
          useClass: BrandRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Brand>>('BRAND_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 3 brands on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(3);
  });
});

import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { FuelRepository } from './fuel.repository';
import { Fuel } from '../../entities/fuel.entity';

describe(FuelRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Fuel>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Fuel>,
          provide: 'FUEL_REPOSITORY',
          useClass: FuelRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Fuel>>('FUEL_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 3 on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(3);
  });
});

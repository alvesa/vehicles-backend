import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { LocalityRepository } from './locality.repository';
import { Locality } from '../../entities/locality.entity';

describe(LocalityRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Locality>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Locality>,
          provide: 'LOCALITY_REPOSITORY',
          useClass: LocalityRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Locality>>('LOCALITY_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 3 values on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(3);
  });
});

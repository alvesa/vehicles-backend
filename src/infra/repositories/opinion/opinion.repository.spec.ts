import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { OpinionRepository } from './opinion.repository';
import { Opinion } from '../../entities/opinion.entity';

describe(OpinionRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Opinion>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Opinion>,
          provide: 'OPINION_REPOSITORY',
          useClass: OpinionRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Opinion>>('OPINION_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 2 values on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(2);
  });
});

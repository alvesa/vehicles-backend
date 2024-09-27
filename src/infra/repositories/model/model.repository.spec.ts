import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { Model } from '../../entities/model.entity';
import { ModelRepository } from './model.repository';

describe(ModelRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Model>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Model>,
          provide: 'MODEL_REPOSITORY',
          useClass: ModelRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Model>>('MODEL_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 4 values on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(4);
  });
});

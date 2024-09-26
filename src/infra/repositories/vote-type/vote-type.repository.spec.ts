import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { VoteType } from '../../entities/voteType.entity';
import { VoteTypeRepository } from './vote-type.repository';

describe('UserRepository', () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<VoteType>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<VoteType>,
          provide: 'VOTE_TYPE_REPOSITORY',
          useClass: VoteTypeRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<VoteType>>(
      'VOTE_TYPE_REPOSITORY',
    );
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 5 vote types on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(5);
  });
});

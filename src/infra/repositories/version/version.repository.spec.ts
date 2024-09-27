import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { Version } from '../../entities/version.entity';
import { VersionRepository } from './version.repository';

describe(VersionRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Version>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Version>,
          provide: 'VERSION_REPOSITORY',
          useClass: VersionRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Version>>('VERSION_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 3 versions on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(3);
  });
});

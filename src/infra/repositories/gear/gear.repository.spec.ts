import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { GearRespository } from './gear.repository';
import { Gear } from '../../entities/gear.entity';

describe(GearRespository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Gear>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Gear>,
          provide: 'GEAR_REPOSITORY',
          useClass: GearRespository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Gear>>('GEAR_REPOSITORY');
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

import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { Country } from '../../entities/country.entity';
import { CountryRepository } from './country.repository';

describe(CountryRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Country>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Country>,
          provide: 'COUNTRY_REPOSITORY',
          useClass: CountryRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Country>>('COUNTRY_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 5 on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(5);
  });
});

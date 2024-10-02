import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { Country, DatasetRepository, VehiclesInfraModule } from '../../infra';
import { CountryService } from './country.service';
import { CountryResponse } from 'application';
import { CountryDto } from 'domain/dtos/country.dto';

describe(CountryService.name, () => {
  let repository: DatasetRepository<Country>;
  let service: BaseService<CountryDto, CountryResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<CountryDto, CountryResponse>,
          provide: 'COUNTRY_SERVICE',
          useClass: CountryService,
        },
      ],
      exports: [],
    }).compile();

    service =
      module.get<BaseService<CountryDto, CountryResponse>>('COUNTRY_SERVICE');
    repository = module.get<DatasetRepository<Country>>('COUNTRY_REPOSITORY');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 5 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(5);
  });
});

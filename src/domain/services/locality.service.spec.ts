import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { DatasetRepository, Locality, VehiclesInfraModule } from '../../infra';
import { LocalityService } from './locality.service';
import { LocalityDto } from 'domain/dtos/locality.dto';
import { LocalityResponse } from 'application';

describe(LocalityService.name, () => {
  let repository: DatasetRepository<Locality>;
  let service: BaseService<LocalityDto, LocalityResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<LocalityDto, LocalityResponse>,
          provide: 'LOCALITY_SERVICE',
          useClass: LocalityService,
        },
      ],
      exports: [],
    }).compile();

    service =
      module.get<BaseService<LocalityDto, LocalityResponse>>(
        'LOCALITY_SERVICE',
      );
    repository = module.get<DatasetRepository<Locality>>('LOCALITY_REPOSITORY');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 3 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(3);
  });
});

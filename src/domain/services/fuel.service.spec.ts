import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { DatasetRepository, Fuel, VehiclesInfraModule } from '../../infra';
import { FuelService } from './fuel.service';
import { FuelResponse } from 'application';
import { FuelDto } from '../../domain';

describe(FuelService.name, () => {
  let repository: DatasetRepository<Fuel>;
  let service: BaseService<FuelDto, FuelResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<FuelDto, FuelResponse>,
          provide: 'FUEL_SERVICE',
          useClass: FuelService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<FuelDto, FuelResponse>>('FUEL_SERVICE');
    repository = module.get<DatasetRepository<Fuel>>('FUEL_REPOSITORY');
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

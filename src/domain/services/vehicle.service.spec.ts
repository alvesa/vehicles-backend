import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { VehiclesInfraModule } from '../../infra';
import { VehicleService } from './vehicle.service';
import { VehicleResponse } from 'application/controllers/vehicle/vehicle.controller';
import { VehicleDto } from '../../domain';

describe(VehicleService.name, () => {
  let service: BaseService<VehicleDto, VehicleResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<VehicleDto, VehicleResponse>,
          provide: 'VEHICLE_SERVICE',
          useClass: VehicleService,
        },
      ],
      exports: [],
    }).compile();

    service =
      module.get<BaseService<VehicleDto, VehicleResponse>>('VEHICLE_SERVICE');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return initial 3 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(3);
  });
});

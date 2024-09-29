import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { Vehicle, VehiclesInfraModule } from '../../infra';
import { VehicleService } from './vehicle.service';

describe(VehicleService.name, () => {
  let service: BaseService<Vehicle>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<Vehicle>,
          provide: 'VEHICLE_SERVICE',
          useClass: VehicleService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<Vehicle>>('VEHICLE_SERVICE');
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

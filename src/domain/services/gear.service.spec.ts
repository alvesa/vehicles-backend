import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { DatasetRepository, Gear, VehiclesInfraModule } from '../../infra';
import { GearDto, GearService } from './gear.service';
import { GearResponse } from 'application';

describe(GearService.name, () => {
  let repository: DatasetRepository<Gear>;
  let service: BaseService<GearDto, GearResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<GearDto, GearResponse>,
          provide: 'GEAR_SERVICE',
          useClass: GearService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<GearDto, GearResponse>>('GEAR_SERVICE');
    repository = module.get<DatasetRepository<Gear>>('GEAR_REPOSITORY');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 4 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(4);
  });
});

import { Test } from '@nestjs/testing';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { Vehicle } from '../../entities/vehicle.entity';
import { VehicleRepository } from './vehicle.repository';

describe(VehicleRepository.name, () => {
  let mockDb: MockDataset;
  let repository: DatasetRepository<Vehicle>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: DatasetRepository<Vehicle>,
          provide: 'VEHICLE_REPOSITORY',
          useClass: VehicleRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    repository = module.get<DatasetRepository<Vehicle>>('VEHICLE_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 3 vehicles on getAll registered by seed', () => {
    expect(repository.getAll()).toHaveLength(3);
  });
});

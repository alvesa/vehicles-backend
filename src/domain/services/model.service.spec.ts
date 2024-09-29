import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { DatasetRepository, Model, VehiclesInfraModule } from '../../infra';
import { ModelService } from './model.service';

describe(ModelService.name, () => {
  let repository: DatasetRepository<Model>;
  let service: BaseService<Model>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<Model>,
          provide: 'MODEL_SERVICE',
          useClass: ModelService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<Model>>('MODEL_SERVICE');
    repository = module.get<DatasetRepository<Model>>('MODEL_REPOSITORY');
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

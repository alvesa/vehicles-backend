import { Test } from '@nestjs/testing';
import { BrandService } from './brand.service';
import { BaseService } from './base.service';
import { Brand, DatasetRepository, VehiclesInfraModule } from '../../infra';

describe(BrandService.name, () => {
  let repository: DatasetRepository<Brand>;
  let service: BaseService<Brand>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<Brand>,
          provide: 'BRAND_SERVICE',
          useClass: BrandService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<Brand>>('BRAND_SERVICE');
    repository = module.get<DatasetRepository<Brand>>('BRAND_REPOSITORY');
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

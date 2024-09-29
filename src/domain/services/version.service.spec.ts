import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { VehiclesInfraModule, Version } from '../../infra';
import { VersionService } from './version.service';

describe(VersionService.name, () => {
  let service: BaseService<Version>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<Version>,
          provide: 'VERSION_SERVICE',
          useClass: VersionService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<Version>>('VERSION_SERVICE');
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

import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { VehiclesInfraModule } from '../../infra';
import { VersionService } from './version.service';
import { VersionResponse } from 'application';
import { VersionDto } from '../../domain';

describe(VersionService.name, () => {
  let service: BaseService<VersionDto, VersionResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<VersionDto, VersionResponse>,
          provide: 'VERSION_SERVICE',
          useClass: VersionService,
        },
      ],
      exports: [],
    }).compile();

    service =
      module.get<BaseService<VersionDto, VersionResponse>>('VERSION_SERVICE');
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

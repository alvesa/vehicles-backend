import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { DatasetRepository, Opinion, VehiclesInfraModule } from '../../infra';
import { OpinionService } from './opinion.service';
import { OpinionResponse } from 'application';
import { OpinionDto } from '../../domain';

describe(OpinionService.name, () => {
  let repository: DatasetRepository<Opinion>;
  let service: BaseService<OpinionDto, OpinionResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<OpinionDto, OpinionResponse>,
          provide: 'OPINION_SERVICE',
          useClass: OpinionService,
        },
      ],
      exports: [],
    }).compile();

    service =
      module.get<BaseService<OpinionDto, OpinionResponse>>('OPINION_SERVICE');
    repository = module.get<DatasetRepository<Opinion>>('OPINION_REPOSITORY');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 2 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(2);
  });
});

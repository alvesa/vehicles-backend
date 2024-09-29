import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { VehiclesInfraModule, Version, VoteType } from '../../infra';
import { VoteTypeService } from './vote-type.service';

describe(VoteTypeService.name, () => {
  let service: BaseService<VoteType>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<Version>,
          provide: 'VOTE_TYPE_SERVICE',
          useClass: VoteTypeService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<VoteType>>('VOTE_TYPE_SERVICE');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return initial 5 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(5);
  });
});

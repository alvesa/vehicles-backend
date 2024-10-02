import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { VehiclesInfraModule } from '../../infra';
import { VoteTypeService } from './vote-type.service';
import { VoteTypeResponse } from 'application';
import { VoteTypeDto } from '../../domain';

describe(VoteTypeService.name, () => {
  let service: BaseService<VoteTypeDto, VoteTypeResponse>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<VoteTypeDto, VoteTypeResponse>,
          provide: 'VOTE_TYPE_SERVICE',
          useClass: VoteTypeService,
        },
      ],
      exports: [],
    }).compile();

    service =
      module.get<BaseService<VoteTypeDto, VoteTypeResponse>>(
        'VOTE_TYPE_SERVICE',
      );
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

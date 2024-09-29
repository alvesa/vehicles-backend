import { Test } from '@nestjs/testing';
import { BaseService } from './base.service';
import { User, UserDatasetRepository, VehiclesInfraModule } from '../../infra';
import { UserService } from './user.service';

describe(UserService.name, () => {
  let repository: UserDatasetRepository;
  let service: BaseService<User>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesInfraModule],
      providers: [
        {
          useValue: BaseService<User>,
          provide: 'USER_SERVICE',
          useClass: UserService,
        },
      ],
      exports: [],
    }).compile();

    service = module.get<BaseService<User>>('USER_SERVICE');
    repository = module.get<UserDatasetRepository>('USER_REPOSITORY');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return initial 0 on getAll registered by seed', () => {
    expect(service.getAll()).toHaveLength(0);
  });
});

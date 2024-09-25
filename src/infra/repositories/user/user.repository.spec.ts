import { Test } from '@nestjs/testing';
import { UserDatasetRepository } from '../dataset.repository';
import { UserRepository } from './user.repository';
import { MockDataset } from '../../db/mock/mock-dataset';

describe('UserRepository', () => {
  let mockDb: MockDataset;
  let sut: UserDatasetRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        {
          useValue: UserDatasetRepository,
          provide: 'USER_REPOSITORY',
          useClass: UserRepository,
        },
        MockDataset,
      ],
      exports: [],
    }).compile();

    mockDb = module.get<MockDataset>(MockDataset);
    sut = module.get<UserDatasetRepository>('USER_REPOSITORY');
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
  });

  it('should return no users when there are no users registered', () => {
    expect(sut.getAll()).toHaveLength(0);
  });
});

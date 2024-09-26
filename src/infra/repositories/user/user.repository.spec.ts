import { Test } from '@nestjs/testing';
import { UserDatasetRepository } from '../dataset.repository';
import { UserRepository } from './user.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { User } from '../../entities/user.entity';

describe('UserRepository', () => {
  let mockDb: MockDataset;
  let repository: UserDatasetRepository;

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
    repository = module.get<UserDatasetRepository>('USER_REPOSITORY');
  });

  afterEach(() => {
    mockDb.user.cleanup();
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(mockDb).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return no users when there are no users registered', () => {
    expect(repository.getAll()).toHaveLength(0);
  });

  it('should return all users when there are users registered', () => {
    const savedUser = repository.save(
      new User(
        'any_name',
        'any_last_name',
        'any_email@any_email.com',
        '1',
        mockDb.locality.getById('1'),
        'any_password',
      ),
    );
    const users = repository.getAll();
    expect(users).toHaveLength(1);

    const user = repository.getById(savedUser);
    expect(repository.getById(user.id)).toEqual(users[0]);
  });

  it('should return an user by email', () => {
    repository.save(
      new User(
        'any_name',
        'any_last_name',
        'any_email@any_email.com',
        '1',
        mockDb.locality.getById('1'),
        'any_password',
      ),
    );
    expect(repository.getByEmail('any_email@any_email.com').email).toEqual(
      'any_email@any_email.com',
    );
  });

  it('should add an user', () => {
    const userId = repository.save(
      new User(
        'any_name',
        'any_last_name',
        'any_email@any_email.com',
        '1',
        mockDb.locality.getById('1'),
        'any_password',
      ),
    );

    const user = repository.getById(userId);
    expect(repository.getById(user.id)).toEqual(user);
  });

  it('should update an user', () => {
    const userId = repository.save(
      new User(
        'any_name',
        'any_last_name',
        'any_email@any_email.com',
        '1',
        mockDb.locality.getById('1'),
        'any_password',
      ),
    );
    repository.update(
      userId,
      new User(
        'any_name2',
        'any_last_name2',
        'any_email2@any_email2.com',
        '2',
        mockDb.locality.getById('2'),
        'any_password2',
      ),
    );
    const updatedUser = repository.getById(userId);

    expect(updatedUser.firstName).toEqual('any_name2');
    expect(updatedUser.lastName).toEqual('any_last_name2');
    expect(updatedUser.email).toEqual('any_email2@any_email2.com');
    expect(updatedUser.localityId).toEqual('2');
    expect(updatedUser.locality).toEqual(mockDb.locality.getById('2'));
    expect(updatedUser.password).toEqual('any_password2');
  });

  it('should delete an user', () => {
    const userId = mockDb.user.save(
      new User(
        'any_name2',
        'any_last_name2',
        'any_email2@any_email2.com',
        '2',
        mockDb.locality.getById('2'),
        'any_password2',
      ),
    );
    repository.delete(userId);
    expect(repository.getById(userId)).toBeUndefined();
  });
});

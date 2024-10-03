import { Test } from '@nestjs/testing';

import { UserDto, VehiclesDomainModule } from '../../../domain';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UserController } from './user.controller';

describe(UserController.name, () => {
  let controller: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [UserController],
      exports: [],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return 0 on getAll registered by seed', () => {
    expect(controller.getAllUsers()).toHaveLength(0);
  });

  it('should throw NotFoundException case user not found', () => {
    try {
      controller.getUserById('user-not-found');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('User not found');
    }
  });

  it('should return first user registered', () => {
    const userId = controller.addUser(
      new UserDto(
        'name',
        'lastName',
        'email@email.com',
        '1',
        'passwordsad6f54fgd54',
      ),
    );

    const result = controller.getUserById(userId);

    expect(result).toMatchObject(
      expect.objectContaining({
        id: userId,
        email: 'email@email.com',
        firstName: 'name',
        lastName: 'lastName',
        locality: expect.any(Object),
        localityId: '1',
      }),
    );
  });

  it('should return user by email', () => {
    const userId = controller.addUser(
      new UserDto(
        'name3',
        'lastName3',
        'email3@email.com',
        '2',
        'passwordsad6f54fgd56',
      ),
    );

    const result = controller.getUserByEmail('email3@email.com');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: userId,
        email: 'email3@email.com',
        firstName: 'name3',
        lastName: 'lastName3',
        locality: expect.anything(),
        localityId: '2',
      }),
    );
  });

  it('should not add a new user case user already exists', () => {
    const request = new UserDto(
      'name2',
      'lastName2',
      'email@email.com2',
      '2',
      'passwordsad6f54fgd55',
    );

    try {
      controller.addUser(request);
    } catch (err: Error | any) {
      expect(err).toBeInstanceOf(BadRequestException);
      expect(err.message).toBe('User already exists');
    }
  });

  it('should not add a new user case user already exists', () => {
    const request = new UserDto(
      'name4',
      'lastName4',
      'email@email.com4',
      '15',
      'passwordsad6f54fgd57',
    );

    try {
      controller.addUser(request);
    } catch (err: Error | any) {
      expect(err).toBeInstanceOf(BadRequestException);
      expect(err.message).toBe('Not valid locality');
    }
  });

  // TODO: fix side effects
  it('should add a new user', () => {
    const request = new UserDto(
      'name5',
      'lastName5',
      'email@email.com5',
      '1',
      'passwordsad6f54fgd59',
    );
    const userId = controller.addUser(request);

    expect(controller.getUserById(userId).id).toBe(userId);
  });
});

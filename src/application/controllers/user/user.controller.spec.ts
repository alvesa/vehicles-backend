import { Test } from '@nestjs/testing';

import { UserDto, VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
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

  it('should return throw NotFoundException', () => {
    try {
      controller.getUserById('model-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Model not found');
    }
  });

  it('should return first item', () => {
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
        _id: userId,
        _email: 'email@email.com',
        firstName: 'name',
        lastName: 'lastName',
        locality: expect.anything(),
        localityId: '1',
        password: 'passwordsad6f54fgd54',
      }),
    );
  });

  // TODO: fix side effects
  it('should return a new registered model', () => {
    const request = new UserDto(
      'name2',
      'lastName2',
      'email@email.com2',
      '2',
      'passwordsad6f54fgd55',
    );
    const userId = controller.addUser(request);

    expect(controller.getUserById(userId).id).toBe(userId);
  });
});

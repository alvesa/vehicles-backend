import { Test } from '@nestjs/testing';

import { VehiclesDomainModule } from '../../../domain';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRequest } from './dtos/user.request';

const usersRequest: UserRequest[] = [
  {
    firstName: 'name1',
    lastName: 'lastName1',
    email: 'email1@email.com',
    localityId: '1',
    password: 'Pass4aC5654@',
  },
  {
    firstName: 'name2',
    lastName: 'lastName2',
    email: 'email2@email.com',
    localityId: '1',
    password: 'Pass4aC5654@',
  },
  {
    firstName: 'name3',
    lastName: 'lastName3',
    email: 'email3@email.com',
    localityId: '1',
    password: 'Pass4aC5654@',
  },
  {
    firstName: 'name4',
    lastName: 'lastName4',
    email: 'email4@email.com',
    localityId: '1',
    password: 'Pass4aC5654@',
  },
  {
    firstName: 'name5',
    lastName: 'lastName5',
    email: 'email5@email.com',
    localityId: '1',
    password: 'min8',
  },
  {
    firstName: 'name6',
    lastName: 'lastName6',
    email: 'email6@email.com',
    localityId: '1',
    password: 'notNumbersPass@',
  },
  {
    firstName: 'name7',
    lastName: 'lastName7',
    email: 'email7@email.com',
    localityId: '1',
    password: 'notminuppercasep4ssword@',
  },
];

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

  it('should return first user registered', async () => {
    const userId = await controller.addUser(usersRequest[0]);

    const result = controller.getUserById(userId);

    expect(result).toMatchObject(
      expect.objectContaining({
        id: userId,
        email: 'email1@email.com',
        firstName: 'name1',
        lastName: 'lastName1',
        locality: expect.any(Object),
        localityId: '1',
      }),
    );
  });

  it('should return user by email', async () => {
    const userId = await controller.addUser(usersRequest[1]);

    const result = controller.getUserByEmail('email2@email.com');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: userId,
        email: 'email2@email.com',
        firstName: 'name2',
        lastName: 'lastName2',
        locality: expect.any(Object),
        localityId: '1',
      }),
    );
  });

  it('should not add a new user case user already exists', async () => {
    try {
      await controller.addUser(usersRequest[2]);
    } catch (err: Error | any) {
      expect(err).toBeInstanceOf(BadRequestException);
      expect(err.message).toBe('User already exists');
    }
  });

  it('should not add a new user case user already exists', async () => {
    try {
      await controller.addUser(usersRequest[3]);
    } catch (err: Error | any) {
      expect(err).toBeInstanceOf(BadRequestException);
      expect(err.message).toBe('Not valid locality');
    }
  });

  // TODO: fix side effects
  it('should add a new user', async () => {
    const request: UserRequest = {
      firstName: 'name6',
      lastName: 'lastName6',
      email: 'email6@email.com',
      localityId: '1',
      password: 'Pass4aC5654@',
    };
    const userId = await controller.addUser(request);

    expect(controller.getUserById(userId).id).toBe(userId);
  });

  it('should not create user with no valid password', async () => {
    console.log(usersRequest[6]);
    await expect(controller.addUser(usersRequest[4])).rejects.toMatchObject([
      {
        children: [],
        constraints: {
          isStrongPassword: 'password is not strong enough',
          minLength: 'password must be longer than or equal to 8 characters',
        },
        property: 'password',
        target: {
          email: 'email5@email.com',
          firstName: 'name5',
          lastName: 'lastName5',
          localityId: '1',
          password: 'min8',
        },
        value: 'min8',
      },
    ]);
    await expect(controller.addUser(usersRequest[5])).rejects.toMatchObject([
      {
        children: [],
        constraints: { isStrongPassword: 'password is not strong enough' },
        property: 'password',
        target: {
          email: 'email6@email.com',
          firstName: 'name6',
          lastName: 'lastName6',
          localityId: '1',
          password: 'notNumbersPass@',
        },
        value: 'notNumbersPass@',
      },
    ]);

    await expect(controller.addUser(usersRequest[6])).rejects.toMatchObject([
      {}, // TODO: fix object matching
    ]);
  });
});

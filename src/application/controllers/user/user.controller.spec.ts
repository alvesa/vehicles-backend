import { Test } from '@nestjs/testing';

import { VehiclesDomainModule } from '../../../domain';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRequest } from './dtos/user.request';

const usersRequest: UserRequest = {
  firstName: 'UserName',
  lastName: 'LastName',
  email: 'email1@email.com',
  localityId: '1',
  password: 'Pass4aC5654@',
};

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
    const userId = await controller.addUser(usersRequest);

    const result = controller.getUserById(userId);

    expect(result).toMatchObject(
      expect.objectContaining({
        id: userId,
        email: 'email1@email.com',
        firstName: 'UserName',
        lastName: 'LastName',
        locality: expect.any(Object),
        localityId: '1',
      }),
    );
  });

  it('should return user by email', async () => {
    const userId = await controller.addUser({
      email: 'email2@email.com',
      firstName: 'NameTwo',
      lastName: 'LastNameTwo',
      localityId: '1',
      password: 'Pass4aC5654@',
    });

    const result = controller.getUserByEmail('email2@email.com');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: userId,
        email: 'email2@email.com',
        firstName: 'NameTwo',
        lastName: 'LastNameTwo',
        locality: expect.any(Object),
        localityId: '1',
      }),
    );
  });

  it('should not add a new user case user already exists', async () => {
    try {
      await controller.addUser({ ...usersRequest });
    } catch (err: Error | any) {
      expect(err).toBeInstanceOf(BadRequestException);
      expect(err.message).toBe('User already exists');
    }
  });

  it('should not add a new user case user already exists', async () => {
    try {
      await controller.addUser({
        ...usersRequest,
        email: 'email3@email.com',
        localityId: '16',
      });
    } catch (err: Error | any) {
      expect(err).toBeInstanceOf(BadRequestException);
      expect(err.message).toBe('Not valid locality');
    }
  });

  // TODO: fix side effects
  it('should add a new user', async () => {
    const request: UserRequest = {
      firstName: 'NewUser',
      lastName: 'LastNewUser',
      email: 'email6@email.com',
      localityId: '1',
      password: 'Pass4aC5654@',
    };
    const userId = await controller.addUser(request);

    expect(controller.getUserById(userId).id).toBe(userId);
  });

  it('should not create user with no valid password', async () => {
    await expect(
      controller.addUser({ ...usersRequest, password: 'min8' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          isStrongPassword: 'password is not strong enough',
        },
        value: 'min8',
      },
    ]);
    await expect(
      controller.addUser({ ...usersRequest, password: 'notNumbersPass@' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          isStrongPassword: 'password is not strong enough',
        },
        value: 'notNumbersPass@',
      },
    ]);

    await expect(
      controller.addUser({
        ...usersRequest,
        password: 'not-min-uppercase-p4ssword@',
      }),
    ).rejects.toMatchObject([
      {
        constraints: {
          isStrongPassword: 'password is not strong enough',
        },
        value: 'not-min-uppercase-p4ssword@',
      },
    ]);

    await expect(
      controller.addUser({ ...usersRequest, password: 'notMinSpecialCh4r' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          isStrongPassword: 'password is not strong enough',
        },
        value: 'notMinSpecialCh4r',
      },
    ]);

    await expect(
      controller.addUser({ ...usersRequest, password: 'NOTM1NLOWERC4S3' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          isStrongPassword: 'password is not strong enough',
        },
        value: 'NOTM1NLOWERC4S3',
      },
    ]);
  });

  it('should not create if request contains not valid locality', async () => {
    await expect(
      controller.addUser({ ...usersRequest, localityId: 'not-valid' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          matches: 'localityId must match /[0-9]/g regular expression',
        },
      },
    ]);
  });

  it('should not create if request contains not valid email', async () => {
    await expect(
      controller.addUser({ ...usersRequest, email: 'not-valid-email.com' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          isEmail: 'email must be an email',
        },
      },
    ]);
  });

  it('should not create if request contains not valid firstName or lastName', async () => {
    await expect(
      controller.addUser({ ...usersRequest, firstName: 'nm' }),
    ).rejects.toMatchObject([
      {
        constraints: {
          minLength: 'firstName must be longer than or equal to 3 characters',
        },
      },
    ]);

    await expect(
      controller.addUser({
        ...usersRequest,
        firstName: '1234567890123456789012345678901',
      }),
    ).rejects.toMatchObject([
      {
        constraints: {
          maxLength: 'firstName must be shorter than or equal to 30 characters',
        },
      },
    ]);

    await expect(
      controller.addUser({
        ...usersRequest,
        lastName: 'ln',
      }),
    ).rejects.toMatchObject([
      {
        constraints: {
          minLength: 'lastName must be longer than or equal to 3 characters',
        },
      },
    ]);

    await expect(
      controller.addUser({
        ...usersRequest,
        lastName: '1234567890123456789012345678901',
      }),
    ).rejects.toMatchObject([
      {
        constraints: {
          maxLength: 'lastName must be shorter than or equal to 30 characters',
        },
      },
    ]);
  });
});

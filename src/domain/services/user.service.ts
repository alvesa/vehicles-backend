import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { UserRequest } from '../../application';
import { DatasetRepository, Locality, User } from 'infra';

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  locality?: Locality;
  password: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: DatasetRepository<User>,
    @Inject('LOCALITY_REPOSITORY')
    private readonly localityRepository: DatasetRepository<Locality>,
  ) {}

  getAll(): UserDto[] {
    const users = this.userRepository.getAll();

    return users?.map((user: UserDto) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      locality: user.locality,
      password: user.password,
    }));
  }

  getById(id: string): UserDto {
    const user = this.userRepository.getById(id);

    if (!user) return;

    return new UserDto(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.password,
    );
  }

  save(user: UserRequest): void {
    const locality = this.localityRepository.getById(user.localityId);

    this.userRepository.save({
      id: randomUUID(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      locality,
      localityId: locality.id,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { Locality } from '../infra/entities/locality.entity';
import { randomUUID } from 'crypto';
import { UserRequest } from '../application/user/user.controller';
import { DatasetRepository } from '../infra/repositories/dataset.repository';
import { User } from '../infra/entities/user.entity';

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
    private readonly userRepository: DatasetRepository<User>,
    private readonly localityRepository: DatasetRepository<Locality>,
  ) {}

  getAll(): UserDto[] {
    const users = this.userRepository.getAll();

    return users.map((user: UserDto) => ({
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
    const locality = this.localityRepository.getAll()[0];

    this.userRepository.save({
      id: randomUUID(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      locality,
    });
  }
}

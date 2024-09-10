import { Injectable } from '@nestjs/common';
import { Locality } from '../infra/entities/locality.entity';
import { UserRepository } from '../infra/repositories/user.repository';
import { randomUUID } from 'crypto';
import { UserRequest } from 'src/application/user/user.controller';

export class UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  localityId?: Locality;
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
  constructor(private readonly userRepository: UserRepository) {}

  getAll(): UserDto[] {
    const users = this.userRepository.getAll();

    return users.map((user: UserDto) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      // localityId: user.localityId,
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
    this.userRepository.save({
      id: randomUUID(),
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      localityId: new Locality(),
    });
  }
}

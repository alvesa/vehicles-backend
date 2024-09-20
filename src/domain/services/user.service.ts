import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatasetRepository, Locality, User } from 'infra';
import { BaseService } from './base.service';

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
export class UserService extends BaseService<User> {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: DatasetRepository<User>,
    @Inject('LOCALITY_REPOSITORY')
    private readonly localityRepository: DatasetRepository<Locality>,
  ) {
    super();
  }

  getAll(): User[] {
    return this.userRepository.getAll();
  }

  getById(id: string): User {
    return this.userRepository.getById(id);
  }

  add(entity: User): void {
    const locality = this.localityRepository.getById(entity.localityId);

    this.userRepository.save({
      id: randomUUID(),
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      password: entity.password,
      locality,
      localityId: locality.id,
    });
  }
  update(entity: User): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }
}

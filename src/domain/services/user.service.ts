import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import {
  DatasetRepository,
  Locality,
  User,
  UserDatasetRepository,
} from 'infra';
import { UserBaseService } from './base.service';

export class UserDto extends User {
  firstName: string;
  lastName: string;
  email: string;
  localityId: string;
  locality: Locality;
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    localityId: string,
    locality: Locality,
    password: string,
  ) {
    super(
      randomUUID(),
      firstName,
      lastName,
      email,
      localityId,
      locality,
      password,
    );
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.localityId = localityId;
    this.locality = locality;
    this.password = password;
  }
}

@Injectable()
export class UserService extends UserBaseService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserDatasetRepository,
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

  add(entity: UserDto): void {
    const id = randomUUID();

    this.userRepository.save(
      new User(
        id,
        entity.firstName,
        entity.lastName,
        entity.email,
        entity.localityId,
        entity.locality,
        entity.password,
      ),
    );
  }
  update(entity: User): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }

  getByEmail(email: string): User {
    return this.userRepository.getByEmail(email);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import {
  DatasetRepository,
  Locality,
  User,
  UserDatasetRepository,
} from '../../infra';
import { UserBaseService } from './base.service';
import { UserDto } from 'domain/dtos/user.dto';

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
    this.userRepository.save(
      new User(
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
    this.userRepository.update(entity.id, entity);
  }
  delete(id: string): void {
    this.userRepository.delete(id);
  }

  getByEmail(email: string): User {
    return this.userRepository.getByEmail(email);
  }
}

import { Injectable } from '@nestjs/common';
import { MockDataset } from '../../db/mock/mock-dataset';
import { UserDatasetRepository } from '../dataset.repository';
import { User } from '../../entities/user.entity';

@Injectable()
export class UserRepository extends UserDatasetRepository {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }

  getByEmail(email: string): User {
    return this.mockDb.user.getByEmail(email);
  }

  getAll(): User[] {
    return this.mockDb.user.getAll();
  }

  getById(id: string): User {
    return this.mockDb.user.getById(id);
  }

  save(entity: User): string {
    return this.mockDb.user.save(entity);
  }

  update(id: string, entity: User): void {
    const user = this.getById(id);

    this.mockDb.user.update(
      id,
      new User(
        entity.firstName || user.firstName,
        entity.lastName || user.lastName,
        entity.email || user.email,
        entity.localityId || user.localityId,
        entity.locality || user.locality,
        entity.password || user.password,
      ),
    );
  }

  delete(id: string): void {
    this.mockDb.user.delete(id);
  }
}

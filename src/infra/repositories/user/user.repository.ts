import { Injectable } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { DatasetRepository } from '../dataset.repository';
import { DatasetBase } from '../../db/dataset-base';

@Injectable()
export class UserRepository extends DatasetRepository<User> {
  constructor(private readonly mockDb: DatasetBase) {
    super();
  }

  getAll(): User[] {
    return this.mockDb.getAll();
  }
  getById(id: string): User {
    return this.mockDb.getById(id);
  }
  save(entity: User): void {
    this.mockDb.save(entity);
  }
  update(entity: User): void {
    this.mockDb.update(entity);
  }
  delete(id: string): void {
    this.mockDb.delete(id);
  }
}

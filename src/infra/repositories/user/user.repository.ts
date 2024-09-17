import { Injectable } from '@nestjs/common';
import { DatasetRepository, MockDataset, User } from 'infra';

@Injectable()
export class UserRepository extends DatasetRepository<User> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): User[] {
    return this.mockDb.user.getAll();
  }
  getById(id: string): User {
    return this.mockDb.user.getById(id);
  }
  save(entity: User): void {
    this.mockDb.user.save(entity);
  }
  update(entity: User): void {
    this.mockDb.user.update(entity);
  }
  delete(id: string): void {
    this.mockDb.user.delete(id);
  }
}

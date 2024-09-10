import { DbBase } from './db_base';
import { User } from '../entities/user.entity';

export class MockDb implements DbBase {
  private static readonly users: User[] = [];

  getAll() {
    return MockDb.users;
  }
  getById(id: string) {
    return MockDb.users.find((user) => user.id === id);
  }
  save(entity: User) {
    MockDb.users.push(entity);
    return entity;
  }
  update(entity: User) {
    const user = this.getById(entity.id);

    if (user) {
      user.firstName = entity.firstName;
      user.lastName = entity.lastName;
      user.email = entity.email;
      user.localityId = entity.localityId;
      user.password = entity.password;
    }
  }
  delete(id: string) {
    const user = this.getById(id);
    MockDb.users.splice(MockDb.users.indexOf(user), 1);
  }
}

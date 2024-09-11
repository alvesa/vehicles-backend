import { DatasetBase } from '../dataset-base';
import { User } from '../../entities/user.entity';

export class MockDataset implements DatasetBase {
  private static readonly users: User[] = [];

  getAll() {
    return MockDataset.users;
  }
  getById(id: string) {
    return MockDataset.users.find((user) => user.id === id);
  }
  save(entity: User) {
    MockDataset.users.push(entity);
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
    MockDataset.users.splice(MockDataset.users.indexOf(user), 1);
  }
}

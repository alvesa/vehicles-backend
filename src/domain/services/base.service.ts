import { User } from 'infra';

export abstract class BaseService<T> {
  abstract getAll(): T[];
  abstract getById(id: string): T;
  abstract add(entity: T): void;
  abstract update(entity: T): void;
  abstract delete(id: string): void;
}

export abstract class UserBaseService extends BaseService<User> {
  abstract getByEmail(email: string): User;
}

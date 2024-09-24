import { Injectable } from '@nestjs/common';
import { User } from 'infra';

export interface IDatasetRepository {
  getAll(): any;
  getById(id: string): any;
  save(entity: any): any;
  update(entity: any): any;
  delete(entity: any): any;
}

@Injectable()
export abstract class DatasetRepository<T> implements IDatasetRepository {
  abstract getAll(): T[];
  abstract getById(id: string): T;
  abstract save(entity: T): void;
  abstract update(entity: T): void;
  abstract delete(id: string): void;
}

@Injectable()
export abstract class UserDatasetRepository extends DatasetRepository<User> {
  constructor() {
    super();
  }
  abstract getByEmail(email: string): User;
}

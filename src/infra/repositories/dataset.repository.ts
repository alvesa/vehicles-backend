export interface IDatasetRepository {
  getAll(): any;
  getById(id: string): any;
  save(entity: any): any;
  update(entity: any): any;
  delete(entity: any): any;
}

export abstract class DatasetRepository<T> implements IDatasetRepository {
  abstract getAll(): T[];
  abstract getById(id: string): T;
  abstract save(entity: T): void;
  abstract update(entity: T): void;
  abstract delete(id: string): void;
}

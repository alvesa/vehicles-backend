export abstract class BaseService<T> {
  abstract getAll(): T[];
  abstract getById(id: string): T;
  abstract add(entity: T): void;
  abstract update(entity: T): void;
  abstract delete(id: string): void;
}

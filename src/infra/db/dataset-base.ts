export interface IDatasetBase {
  getAll(): any;
  getById(id: string): any;
  save(entity: any): any;
  update(entity: any): any;
  delete(id: string): any;
}

export abstract class DatasetBase implements IDatasetBase {
  abstract getAll(): any;
  abstract getById(id: string): any;
  abstract save(entity: any): any;
  abstract update(entity: any): any;
  abstract delete(id: string): any;
}

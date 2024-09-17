export interface BaseDataset {
  getAll(): any[];
  getById(id: string): any;
  save(entity: any): void;
  update(entity: any): void;
  delete(id: string): void;
}

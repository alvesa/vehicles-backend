export interface DbBase {
  getAll(): any;
  getById(id: string): any;
  save(entity: any): any;
  update(entity: any): any;
  delete(id: string): any;
}

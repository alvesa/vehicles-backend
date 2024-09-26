import { DatasetRepository, MockDataset, Model } from 'infra';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelRepository extends DatasetRepository<Model> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }

  getAll(): Model[] {
    return this.mockDb.models.getAll();
  }
  getById(id: string): Model {
    return this.mockDb.models.getById(id);
  }
  save(entity: Model): string {
    return this.mockDb.models.save(entity);
  }
  update(id: string, entity: Model): void {
    this.mockDb.models.update(entity);
  }
  delete(id: string): void {
    this.mockDb.models.delete(id);
  }
}

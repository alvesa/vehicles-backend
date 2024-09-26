import { Injectable } from '@nestjs/common';
import { DatasetRepository, MockDataset, Opinion } from 'infra';

@Injectable()
export class OpinionRepository extends DatasetRepository<Opinion> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }

  getAll(): Opinion[] {
    return this.mockDb.opinions.getAll();
  }
  getById(id: string): Opinion {
    return this.mockDb.opinions.getById(id);
  }
  save(entity: Opinion): string {
    return this.mockDb.opinions.save(entity);
  }
  update(id: string, entity: Opinion): void {
    this.mockDb.opinions.update(entity);
  }
  delete(id: string): void {
    this.mockDb.opinions.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { DatasetRepository } from '../dataset.repository';
import { Brand } from 'infra/entities/brand.entity';
import { MockDataset } from 'infra/db/mock/mock-dataset';

@Injectable()
export class BrandRepository extends DatasetRepository<Brand> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }

  getAll(): Brand[] {
    return this.mockDb.brands.getAll();
  }
  getById(id: string): Brand {
    return this.mockDb.brands.getById(id);
  }
  save(entity: Brand): void {
    this.mockDb.brands.save(entity);
  }
  update(entity: Brand): void {
    this.update(entity);
  }
  delete(id: string): void {
    this.mockDb.brands.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { Brand, DatasetRepository, MockDataset } from 'infra';

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
  save(entity: Brand): string {
    return this.mockDb.brands.save(entity);
  }
  update(id: string, entity: Brand): void {
    this.update(id, entity);
  }
  delete(id: string): void {
    this.mockDb.brands.delete(id);
  }
}

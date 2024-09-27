import { Injectable } from '@nestjs/common';
import { Country, DatasetRepository, MockDataset } from '../../../infra';

@Injectable()
export class CountryRepository extends DatasetRepository<Country> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): Country[] {
    return this.mockDb.country.getAll();
  }
  getById(id: string): Country {
    return this.mockDb.country.getById(id);
  }
  save(entity: Country): string {
    return this.mockDb.country.save(entity);
  }
  update(id: string, entity: Country): void {
    this.mockDb.country.update(entity);
  }
  delete(id: string): void {
    this.mockDb.country.delete(id);
  }
}

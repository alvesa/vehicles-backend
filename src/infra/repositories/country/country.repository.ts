import { Country } from '../../entities/country.entity';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from 'src/infra/db/mock/mock-dataset';

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
  save(entity: Country): void {
    this.mockDb.country.save(entity);
  }
  update(entity: Country): void {
    this.update(entity);
  }
  delete(id: string): void {
    this.mockDb.country.delete(id);
  }
}

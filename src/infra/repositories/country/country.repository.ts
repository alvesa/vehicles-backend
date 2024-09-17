import { Injectable } from '@nestjs/common';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from '../../db/mock/mock-dataset';
import { Country } from 'infra/entities/country.entity';

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
  save(entity: Country): void {
    this.mockDb.country.save(entity);
  }
  update(entity: Country): void {
    this.mockDb.country.update(entity);
  }
  delete(id: string): void {
    this.mockDb.country.delete(id);
  }
}

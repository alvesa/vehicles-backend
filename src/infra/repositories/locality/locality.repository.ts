import { Injectable } from '@nestjs/common';
import { DatasetRepository, Locality, MockDataset } from 'infra';

@Injectable()
export class LocalityRepository extends DatasetRepository<Locality> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): Locality[] {
    const localities = this.mockDb.locality.getAll();

    return localities;
  }
  getById(id: string): Locality {
    return this.mockDb.locality.getById(id);
  }
  save(entity: Locality): void {
    this.mockDb.locality.save(entity);
  }
  update(entity: Locality): void {
    this.mockDb.locality.update(entity);
  }
  delete(id: string): void {
    this.mockDb.locality.delete(id);
  }
}

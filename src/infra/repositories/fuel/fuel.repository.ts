import { Injectable } from '@nestjs/common';
import { DatasetRepository, Fuel, MockDataset } from 'infra';

@Injectable()
export class FuelRepository implements DatasetRepository<Fuel> {
  constructor(private readonly mockDb: MockDataset) {}

  getAll(): Fuel[] {
    return this.mockDb.fuels.getAll();
  }

  getById(id: string): Fuel {
    return this.mockDb.fuels.getById(id);
  }
  save(entity: Fuel): string {
    return this.mockDb.fuels.save(entity);
  }
  update(id: string, entity: Fuel): void {
    this.mockDb.fuels.update(entity);
  }
  delete(id: string): void {
    this.mockDb.fuels.delete(id);
  }
}

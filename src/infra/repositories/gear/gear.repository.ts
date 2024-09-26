import { Injectable } from '@nestjs/common';
import { DatasetRepository, Gear, MockDataset } from 'infra';

@Injectable()
export class GearRespository extends DatasetRepository<Gear> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }

  getAll(): Gear[] {
    return this.mockDb.gears.getAll();
  }
  getById(id: string): Gear {
    return this.mockDb.gears.getById(id);
  }
  save(entity: Gear): string {
    return this.mockDb.gears.save(entity);
  }
  update(id: string, entity: Gear): void {
    this.mockDb.gears.update(entity);
  }
  delete(id: string): void {
    this.mockDb.gears.delete(id);
  }
}

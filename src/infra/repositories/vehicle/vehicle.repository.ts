import { Vehicle } from 'infra/entities/vehicle.entity';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset } from 'infra';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleRepository extends DatasetRepository<Vehicle> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): Vehicle[] {
    return this.mockDb.vehicles.getAll();
  }
  getById(id: string): Vehicle {
    return this.mockDb.vehicles.getById(id);
  }
  save(entity: Vehicle): string {
    return this.mockDb.vehicles.save(entity);
  }
  update(id: string, entity: Vehicle): void {
    this.mockDb.vehicles.update(entity);
  }
  delete(id: string): void {
    this.mockDb.vehicles.delete(id);
  }
}

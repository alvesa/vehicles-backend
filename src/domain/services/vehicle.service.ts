import { DatasetRepository, Vehicle } from 'infra';
import { BaseService } from './base.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class VehicleService extends BaseService<Vehicle> {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private readonly ds: DatasetRepository<Vehicle>,
  ) {
    super();
  }
  getAll(): Vehicle[] {
    return this.ds.getAll();
  }
  getById(id: string): Vehicle {
    return this.ds.getById(id);
  }
  add(entity: Vehicle): void {
    this.ds.save(entity);
  }
  update(entity: Vehicle): void {
    this.ds.update(entity.id, entity);
  }
  delete(id: string): void {
    this.ds.delete(id);
  }
}

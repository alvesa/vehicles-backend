import { VehicleResponse } from 'application/controllers/vehicle/vehicle.controller';
import { DatasetRepository, Vehicle } from '../../infra';
import { BaseService } from './base.service';
import { Inject, Injectable } from '@nestjs/common';

export interface VehicleDto {
  id: string;
}

@Injectable()
export class VehicleService extends BaseService<VehicleDto, VehicleResponse> {
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
  add(entity: Vehicle): string {
    return this.ds.save(entity);
  }
  update(entity: Vehicle): void {
    this.ds.update(entity.id, entity);
  }
  delete(id: string): void {
    this.ds.delete(id);
  }
}

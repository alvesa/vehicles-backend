import { VehicleResponse } from 'application/controllers/vehicle/vehicle.controller';
import { DatasetRepository, Vehicle } from '../../infra';
import { BaseService } from './base.service';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { VehicleDto } from '../../domain';

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
    const vehicle = this.ds.getById(id);

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }

    return vehicle;
  }
  add(entity: VehicleDto): string {
    return this.ds.save(
      new Vehicle(
        entity.modelId,
        entity.localityId,
        entity.versionId,
        entity.fuelId,
        entity.year,
        entity.month,
        entity.kms,
        entity.hp,
        entity.gearId,
        entity.active,
      ),
    );
  }
  update(entity: Vehicle): void {
    this.ds.update(entity);
  }
  delete(id: string): void {
    this.ds.delete(id);
  }
}

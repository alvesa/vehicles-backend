import { Controller, Get, Inject } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { Vehicle } from 'infra';

@Controller('vehicle')
export class VehicleController {
  constructor(
    @Inject('VEHICLE_SERVICE')
    private readonly vehicleService: BaseService<Vehicle>,
  ) {}
  @Get()
  getAll() {
    return this.vehicleService.getAll();
  }
}

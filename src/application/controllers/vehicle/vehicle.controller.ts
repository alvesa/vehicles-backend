import { Controller, Get, Inject } from '@nestjs/common';
import { VehicleDto } from '../../../domain';
import { BaseService } from 'domain/services/base.service';

export interface VehicleResponse {
  id: string;
}

@Controller('vehicle')
export class VehicleController {
  constructor(
    @Inject('VEHICLE_SERVICE')
    private readonly vehicleService: BaseService<VehicleDto, VehicleResponse>,
  ) {}
  @Get()
  getAll() {
    return this.vehicleService.getAll();
  }
}

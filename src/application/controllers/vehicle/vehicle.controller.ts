import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { VehicleDto, BaseService } from '../../../domain';

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
  getAll(): VehicleResponse[] {
    return this.vehicleService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): VehicleResponse {
    return this.vehicleService.getById(id);
  }

  @Post()
  addVehicle(@Body() entity: VehicleDto): string {
    return this.vehicleService.add(entity);
  }
}

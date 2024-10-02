import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FuelDto, BaseService } from '../../../domain';
import { FuelResponse } from './dtos/fuel.response';
import { FuelRequest } from './dtos/fuel.request';

@Controller('fuel')
export class FuelController {
  constructor(
    @Inject('FUEL_SERVICE')
    private readonly fuelService: BaseService<FuelDto, FuelResponse>,
  ) {}

  @Get()
  getAll() {
    return this.fuelService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): FuelResponse {
    return this.fuelService.getById(id);
  }

  @Post()
  addFuel(@Body() request: FuelRequest): string {
    return this.fuelService.add(request);
  }
}

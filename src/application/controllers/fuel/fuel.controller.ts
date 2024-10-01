import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { FuelDto } from '../../../domain';
import { BaseService } from 'domain/services/base.service';

export interface FuelRequest {
  name: string;
}

export interface FuelResponse {
  name: string;
}

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
  getById(@Param('id') id: string) {
    return this.fuelService.getById(id);
  }

  @Post()
  addFuel(@Body() request: FuelRequest) {
    return this.fuelService.add(request);
  }
}

import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { Fuel } from 'infra';

@Controller('fuel')
export class FuelController {
  constructor(
    @Inject('FUEL_SERVICE')
    private readonly fuelService: BaseService<Fuel>,
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
  addFuel(@Body() request: Fuel) {
    return this.fuelService.add(request);
  }
}

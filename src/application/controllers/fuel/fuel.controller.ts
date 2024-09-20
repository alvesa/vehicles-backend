import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { FuelDto } from 'domain/services/fuel.service';
import { Fuel } from 'infra';

interface FuelRequest {
  name: string;
}

@Controller('fuel')
export class FuelController {
  constructor(private readonly fuelService: BaseService<Fuel>) {}

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
    return this.fuelService.add(new FuelDto(request.name));
  }
}

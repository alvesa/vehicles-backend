import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FuelDto, FuelService } from 'domain/fuel.service';

interface FuelRequest {
  name: string;
}

@Controller('fuel')
export class FuelController {
  constructor(private readonly fuelService: FuelService) {}

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
    return this.fuelService.addFuel(new FuelDto(request.name));
  }
}

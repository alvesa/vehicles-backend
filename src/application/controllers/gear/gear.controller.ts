import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { BaseService, GearDto } from '../../../domain';

export interface GearRequest {
  name: string;
}

export interface GearResponse {
  id: string;
  name: string;
  active: boolean;
}

@Controller('gear')
export class GearController {
  constructor(
    @Inject('GEAR_SERVICE')
    private readonly gearService: BaseService<GearDto, GearResponse>,
  ) {}

  @Get()
  getAll(): GearResponse[] {
    return this.gearService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): GearResponse {
    return this.gearService.getById(id);
  }

  @Post()
  addGear(@Body() request: GearRequest): string {
    return this.gearService.add(new GearDto(request.name));
  }
}

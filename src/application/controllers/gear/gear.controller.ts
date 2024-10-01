import { Controller, Get, Inject } from '@nestjs/common';
import { GearDto } from '../../../domain';
import { BaseService } from 'domain/services/base.service';

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
  getAll() {
    return this.gearService.getAll();
  }
}

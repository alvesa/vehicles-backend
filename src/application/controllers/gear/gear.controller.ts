import { Controller, Get, Inject } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { Gear } from 'infra';

@Controller('gear')
export class GearController {
  constructor(
    @Inject('GEAR_SERVICE')
    private readonly gearService: BaseService<Gear>,
  ) {}

  @Get()
  getAll() {
    return this.gearService.getAll();
  }
}

import { Controller, Get, Inject, Param } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { Opinion } from 'infra';

@Controller('opinion')
export class OpinionController {
  constructor(
    @Inject('OPINION_SERVICE')
    private readonly opinionService: BaseService<Opinion>,
  ) {}

  @Get()
  getAll(): Opinion[] {
    return this.opinionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Opinion {
    return this.opinionService.getById(id);
  }
}

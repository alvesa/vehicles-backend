import { Controller, Get, Inject, Param } from '@nestjs/common';
import { OpinionDto } from '../../../domain';
import { BaseService } from 'domain/services/base.service';

export interface OpinionResponse {
  id: string;
}

@Controller('opinion')
export class OpinionController {
  constructor(
    @Inject('OPINION_SERVICE')
    private readonly opinionService: BaseService<OpinionDto, OpinionResponse>,
  ) {}

  @Get()
  getAll(): OpinionResponse[] {
    return this.opinionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): OpinionResponse {
    return this.opinionService.getById(id);
  }
}

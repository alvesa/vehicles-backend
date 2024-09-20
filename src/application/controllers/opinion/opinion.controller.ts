import { Controller, Get, Param } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { OpinionDto } from 'domain/services/opinion.service';
import { Opinion } from 'infra';

export interface OpinionResponse extends OpinionDto {}

@Controller('opinion')
export class OpinionController {
  constructor(private readonly opinionService: BaseService<Opinion>) {}

  @Get()
  getAll(): OpinionResponse[] {
    return this.opinionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): OpinionResponse {
    return this.opinionService.getById(id);
  }
}

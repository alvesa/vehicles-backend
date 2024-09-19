import { Controller, Get, Param } from '@nestjs/common';
import { OpinionDto, OpinionService } from 'domain/services/opinion.service';

export interface OpinionResponse extends OpinionDto {}

@Controller('opinion')
export class OpinionController {
  constructor(private readonly opinionService: OpinionService) {}

  @Get()
  getAll(): OpinionResponse[] {
    return this.opinionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): OpinionResponse {
    return this.opinionService.getById(id);
  }
}

import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { OpinionDto, BaseService } from '../../../domain';
import { OpinionRequest } from './dtos/opinion.request';
import { OpinionResponse } from './dtos/opinion.response';

@Controller('opinion')
export class OpinionController {
  constructor(
    @Inject('OPINION_SERVICE')
    private readonly opinionService: BaseService<OpinionDto, OpinionResponse>,
  ) {}

  @Get()
  getAll(): OpinionResponse[] {
    const opinions = this.opinionService.getAll();

    if (!opinions) {
      throw new NotFoundException('Opinions not found');
    }

    return opinions;
  }

  @Get(':id')
  getById(@Param('id') id: string): OpinionResponse {
    const opinion = this.opinionService.getById(id);

    if (!opinion) {
      throw new NotFoundException('Opinion not found');
    }

    return opinion;
  }

  @Post()
  addOpinion(@Body() request: OpinionRequest): string {
    return this.opinionService.add(
      new OpinionDto(
        null,
        request.title,
        request.negatives,
        request.positives,
        request.problems,
        request.general,
        request.vehicleId,
        request.voteTypeOpinionIds,
        request.userOpinionId,
      ),
    );
  }
}

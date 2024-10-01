import { Controller, Get, Inject } from '@nestjs/common';
import { VoteTypeDto } from '../../../domain';
import { BaseService } from 'domain/services/base.service';

export interface VoteTypeResponse {
  id: string;
}

@Controller('vote-type')
export class VoteTypeController {
  constructor(
    @Inject('VOTE_TYPE_SERVICE')
    private readonly voteTypeService: BaseService<
      VoteTypeDto,
      VoteTypeResponse
    >,
  ) {}

  @Get()
  getAllVoteTypes() {
    return this.voteTypeService.getAll();
  }
}

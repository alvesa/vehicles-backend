import { Controller, Get, Inject } from '@nestjs/common';
import { BaseService } from 'domain/services/base.service';
import { VoteType } from 'infra';

@Controller('vote-type')
export class VoteTypeController {
  constructor(
    @Inject('VOTE_TYPE_SERVICE')
    private readonly voteTypeService: BaseService<VoteType>,
  ) {}

  @Get()
  getAllVoteTypes() {
    return this.voteTypeService.getAll();
  }
}

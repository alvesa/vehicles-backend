import { Controller, Get } from '@nestjs/common';
import { VoteTypeService } from 'domain/voteType.service';

@Controller('vote-type')
export class VoteTypeController {
  constructor(private readonly voteTypeService: VoteTypeService) {}

  @Get()
  getAllVoteTypes() {
    return this.voteTypeService.getAll();
  }
}

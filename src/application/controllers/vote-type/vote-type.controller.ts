import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { VoteTypeDto, BaseService } from '../../../domain';

export interface VoteTypeResponse {
  id: string;
  name: string;
  active: boolean;
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
  getAll(): VoteTypeResponse[] {
    return this.voteTypeService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): VoteTypeResponse {
    return this.voteTypeService.getById(id);
  }

  @Post()
  addVoteType(@Body() request: VoteTypeDto): string {
    return this.voteTypeService.add(request);
  }
}

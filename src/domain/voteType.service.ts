import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, VoteType } from 'infra';

@Injectable()
export class VoteTypeService {
  constructor(
    @Inject('VOTE_TYPE_REPOSITORY')
    private readonly voteTypeRepository: DatasetRepository<VoteType>,
  ) {}

  getAll(): VoteType[] {
    return this.voteTypeRepository.getAll();
  }

  getById(id: string): VoteType {
    return this.voteTypeRepository.getById(id);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, VoteType } from '../../infra';
import { BaseService } from './base.service';

@Injectable()
export class VoteTypeService extends BaseService<VoteType> {
  constructor(
    @Inject('VOTE_TYPE_REPOSITORY')
    private readonly voteTypeRepository: DatasetRepository<VoteType>,
  ) {
    super();
  }

  getAll(): VoteType[] {
    return this.voteTypeRepository.getAll();
  }

  getById(id: string): VoteType {
    return this.voteTypeRepository.getById(id);
  }

  add(entity: VoteType): void {
    this.voteTypeRepository.save(entity);
  }
  update(entity: VoteType): void {
    this.voteTypeRepository.update(entity.id, entity);
  }
  delete(id: string): void {
    this.voteTypeRepository.delete(id);
  }
}

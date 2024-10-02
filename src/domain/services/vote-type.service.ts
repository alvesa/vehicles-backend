import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatasetRepository, VoteType } from '../../infra';
import { BaseService } from './base.service';
import { VoteTypeResponse } from '../../application';
import { VoteTypeDto } from '../../domain';

@Injectable()
export class VoteTypeService extends BaseService<
  VoteTypeDto,
  VoteTypeResponse
> {
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
    const voteType = this.voteTypeRepository.getById(id);

    if (!voteType) {
      throw new NotFoundException('VoteType not found');
    }

    return voteType;
  }

  add(entity: VoteType): string {
    return this.voteTypeRepository.save(entity);
  }
  update(entity: VoteType): void {
    this.voteTypeRepository.update(entity);
  }
  delete(id: string): void {
    this.voteTypeRepository.delete(id);
  }
}

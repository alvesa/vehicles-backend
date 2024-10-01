import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Opinion } from '../../infra';
import { BaseService } from './base.service';
import { OpinionResponse } from '../../application';

export interface OpinionDto {
  title: string;
  negatives: string;
  positives: string;
  problems: string;
  general: string;
  vehicleId: string;
  voteTypeOpinionId: string[];
  userOpinionId: string;
}

@Injectable()
export class OpinionService extends BaseService<OpinionDto, OpinionResponse> {
  constructor(
    @Inject('OPINION_REPOSITORY')
    private readonly ds: DatasetRepository<Opinion>,
  ) {
    super();
  }

  getAll(): Opinion[] {
    return this.ds.getAll();
  }

  getById(id: string): Opinion {
    return this.ds.getById(id);
  }

  add(entity: OpinionDto): string {
    return this.ds.save(
      new Opinion(
        entity.title,
        entity.negatives,
        entity.positives,
        entity.problems,
        entity.general,
        entity.vehicleId,
        entity.voteTypeOpinionId,
        entity.userOpinionId,
      ),
    );
  }
  update(entity: Opinion): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }
}

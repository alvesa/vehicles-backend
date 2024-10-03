import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Opinion } from '../../infra';
import { BaseService } from './base.service';
import { OpinionDto } from '../../domain';
import { OpinionResponse } from '../../application';

@Injectable()
export class OpinionService extends BaseService<OpinionDto, OpinionResponse> {
  constructor(
    @Inject('OPINION_REPOSITORY')
    private readonly ds: DatasetRepository<Opinion>,
  ) {
    super();
  }

  getAll(): OpinionDto[] {
    const opinions = this.ds.getAll();

    return opinions.map((opinion) => {
      return new OpinionDto(
        opinion.id,
        opinion.title,
        opinion.negatives,
        opinion.positives,
        opinion.problems,
        opinion.general,
        opinion.vehicleId,
        opinion.voteTypeOpinionIds,
        opinion.userId,
      );
    });
  }

  getById(id: string): OpinionDto {
    const opinion = this.ds.getById(id);

    if (!opinion) {
      return;
    }

    return new OpinionDto(
      opinion.id,
      opinion.title,
      opinion.negatives,
      opinion.positives,
      opinion.problems,
      opinion.general,
      opinion.vehicleId,
      opinion.voteTypeOpinionIds,
      opinion.userId,
    );
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
        entity.voteTypeOpinionIds,
        entity.userId,
      ),
    );
  }
  update(entity: OpinionDto): void {
    const opinion = this.ds.getById(entity.id);

    opinion.title = entity.title;
    opinion.negatives = entity.negatives;
    opinion.positives = entity.positives;
    opinion.problems = entity.problems;
    opinion.general = entity.general;
    opinion.vehicleId = entity.vehicleId;
    opinion.voteTypeOpinionIds = entity.voteTypeOpinionIds;
    opinion.userId = entity.userId;

    this.ds.update(opinion);
  }
  delete(id: string): void {
    const opinion = this.ds.getById(id);

    this.ds.delete(opinion.id);
  }
}

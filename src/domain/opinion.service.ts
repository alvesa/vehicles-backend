import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Opinion } from 'infra';

export interface OpinionDto extends Opinion {}

@Injectable()
export class OpinionService {
  constructor(
    @Inject('OPINION_REPOSITORY')
    private readonly ds: DatasetRepository<Opinion>,
  ) {}

  getAll(): OpinionDto[] {
    return this.ds.getAll();
  }

  getById(id: string): OpinionDto {
    return this.ds.getById(id);
  }
}

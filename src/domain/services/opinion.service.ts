import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Opinion } from 'infra';
import { BaseService } from './base.service';

export interface OpinionDto extends Opinion {}

@Injectable()
export class OpinionService extends BaseService<Opinion> {
  constructor(
    @Inject('OPINION_REPOSITORY')
    private readonly ds: DatasetRepository<Opinion>,
  ) {
    super();
  }

  getAll(): OpinionDto[] {
    return this.ds.getAll();
  }

  getById(id: string): OpinionDto {
    return this.ds.getById(id);
  }

  add(entity: Opinion): void {
    console.log({ entity });
  }
  update(entity: Opinion): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }
}

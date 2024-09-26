import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Model } from 'infra';
import { BaseService } from './base.service';

@Injectable()
export class ModelService extends BaseService<Model> {
  constructor(
    @Inject('MODEL_REPOSITORY')
    private readonly modelRepository: DatasetRepository<Model>,
  ) {
    super();
  }

  getAll(): Model[] {
    return this.modelRepository.getAll();
  }

  getById(id: string): Model {
    return this.modelRepository.getById(id);
  }

  add(entity: Model): void {
    this.modelRepository.save(entity);
  }
  update(entity: Model): void {
    this.modelRepository.update(entity.id, entity);
  }
  delete(id: string): void {
    this.modelRepository.delete(id);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Model } from '../../infra';
import { BaseService } from './base.service';
import { ModelResponse } from 'application';

export interface ModelDto {
  name: string;
}

@Injectable()
export class ModelService extends BaseService<ModelDto, ModelResponse> {
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

  add(entity: Model): string {
    return this.modelRepository.save(entity);
  }
  update(entity: Model): void {
    this.modelRepository.update(entity.id, entity);
  }
  delete(id: string): void {
    this.modelRepository.delete(id);
  }
}

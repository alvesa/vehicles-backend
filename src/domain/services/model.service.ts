import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DatasetRepository, Model } from '../../infra';
import { BaseService } from './base.service';
import { ModelResponse } from 'application';
import { ModelDto } from '../../domain';

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
    const model = this.modelRepository.getById(id);

    if (!model) {
      throw new NotFoundException('Model not found');
    }

    return model;
  }

  add(entity: Model): string {
    return this.modelRepository.save(entity);
  }
  update(entity: Model): void {
    this.modelRepository.update(entity);
  }
  delete(id: string): void {
    this.modelRepository.delete(id);
  }
}

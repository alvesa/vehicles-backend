import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Model } from 'infra';

@Injectable()
export class ModelService {
  constructor(
    @Inject('MODEL_REPOSITORY')
    private readonly modelRepository: DatasetRepository<Model>,
  ) {}

  getAll(): Model[] {
    return this.modelRepository.getAll();
  }

  getById(id: string): Model {
    return this.modelRepository.getById(id);
  }

  addModel(entity: Model): void {
    this.modelRepository.save(entity);
  }
}

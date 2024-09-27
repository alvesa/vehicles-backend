import { Inject, Injectable } from '@nestjs/common';
import { Brand, DatasetRepository } from '../../infra';
import { BaseService } from './base.service';

// TODO: include all dtos to a specific path

@Injectable()
export class BrandService extends BaseService<Brand> {
  constructor(
    @Inject('BRAND_REPOSITORY')
    private readonly brandRepository: DatasetRepository<Brand>,
  ) {
    super();
  }

  getAll(): Brand[] {
    return this.brandRepository.getAll();
  }

  getById(id: string): Brand {
    return this.brandRepository.getById(id);
  }

  add(entity: Brand): void {
    this.brandRepository.save(new Brand(entity.name));
  }

  update(entity: Brand): void {
    this.brandRepository.update(entity.id, entity);
  }

  delete(id: string): void {
    this.brandRepository.delete(id);
  }
}

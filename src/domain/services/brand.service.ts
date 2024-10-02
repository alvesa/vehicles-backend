import { Inject, Injectable } from '@nestjs/common';
import { Brand, DatasetRepository } from '../../infra';
import { BaseService } from './base.service';
import { BrandResponse } from 'application';

// TODO: include all dtos to a specific path
export class BrandDto {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Injectable()
export class BrandService extends BaseService<BrandDto, BrandResponse> {
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

  add(entity: BrandDto): string {
    return this.brandRepository.save(new Brand(entity.name));
  }

  update(entity: Brand): void {
    this.brandRepository.update(entity);
  }

  delete(id: string): void {
    this.brandRepository.delete(id);
  }
}

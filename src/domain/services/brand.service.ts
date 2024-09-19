import { Inject, Injectable } from '@nestjs/common';
import { Brand, DatasetRepository } from 'infra';
import { randomUUID } from 'crypto';
import { BrandRequest } from 'application';

// TODO: include all dtos to a specific path
export class BrandDto {
  id: string;
  name: string;
  active: boolean;

  constructor(name: string, active: boolean = true) {
    this.id = randomUUID();
    this.name = name;
    this.active = active;
  }
}

@Injectable()
export class BrandService {
  constructor(
    @Inject('BRAND_REPOSITORY')
    private readonly brandRepository: DatasetRepository<Brand>,
  ) {}

  getAll(): BrandDto[] {
    return this.brandRepository.getAll();
  }

  getById(id: string): BrandDto {
    return this.brandRepository.getById(id);
  }

  addBrand(entity: BrandRequest): void {
    this.brandRepository.save(new Brand(entity.name));
  }

  update(entity: BrandDto): void {
    this.brandRepository.update(entity);
  }

  delete(id: string): void {
    this.brandRepository.delete(id);
  }
}

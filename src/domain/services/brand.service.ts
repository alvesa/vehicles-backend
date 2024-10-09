import { Injectable } from '@nestjs/common';
import { Brand, BrandRepository } from '../../infra';

// TODO: include all dtos to a specific path
export class BrandDto {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Injectable()
export class BrandService {
  constructor(private readonly brandRepository: BrandRepository) {}

  async getAll(): Promise<Brand[]> {
    return await this.brandRepository.getAll();
  }

  async getById(id: string): Promise<any> {
    return await this.brandRepository.getById(id);
  }

  async add(entity: BrandDto): Promise<string> {
    return await this.brandRepository.save({
      name: entity.name,
      active: true,
    });
  }

  async update(entity: any): Promise<void> {
    await this.brandRepository.update(entity);
  }

  async delete(id: string): Promise<void> {
    await this.brandRepository.delete(id);
  }
}

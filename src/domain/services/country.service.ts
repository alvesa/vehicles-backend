import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Country, DatasetRepository } from 'infra';
import { BaseService } from './base.service';

export interface CountryDto {
  id: string;
  name: string;
  active: boolean;
}

@Injectable()
export class CountryService extends BaseService<Country> {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: DatasetRepository<Country>,
  ) {
    super();
  }

  getById(id: string): CountryDto {
    const country = this.countryRepository.getById(id);

    if (!country) throw new NotFoundException('Country not found');

    return {
      id: country.id,
      name: country.name,
      active: country.active,
    };
  }

  getAll(): Country[] {
    return this.countryRepository.getAll();
  }
  add(entity: Country): void {
    this.countryRepository.save(new Country(entity.name));
  }
  update(entity: Country): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }
}

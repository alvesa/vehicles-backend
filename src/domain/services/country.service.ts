import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Country, DatasetRepository } from '../../infra';
import { BaseService } from './base.service';
import { CountryResponse } from 'application';
import { CountryDto } from 'domain/dtos/country.dto';

@Injectable()
export class CountryService extends BaseService<CountryDto, CountryResponse> {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: DatasetRepository<Country>,
  ) {
    super();
  }

  getById(id: string): Country {
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
  add(entity: Country): string {
    return this.countryRepository.save(new Country(entity.name));
  }
  update(entity: Country): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }
}

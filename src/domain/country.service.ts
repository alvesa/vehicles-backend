import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Country, DatasetRepository } from '../infra';
import { randomUUID } from 'crypto';

export interface CountryDto {
  id: string;
  name: string;
  active: boolean;
}

@Injectable()
export class CountryService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: DatasetRepository<Country>,
  ) {}

  getAllCountries(): CountryDto[] {
    const countries = this.countryRepository.getAll();
    return countries.map((country) => ({
      id: country.id,
      name: country.name,
      active: country.active,
    }));
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

  addCountry(name: string): void {
    this.countryRepository.save(new Country(randomUUID(), name, true));
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { Country, DatasetRepository, Locality } from '../infra';
import { CountryDto } from './country.service';
import { randomUUID } from 'crypto';
import { LocalityRequest } from 'application/controllers/locality/locality.controller';

interface LocalityDto {
  name: string;
  country: CountryDto;
}

@Injectable()
export class LocalityService {
  constructor(
    @Inject('LOCALITY_REPOSITORY')
    private readonly localityRepository: DatasetRepository<Locality>,
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: DatasetRepository<Country>,
  ) {}

  getAll(): LocalityDto[] {
    return this.localityRepository.getAll();
  }

  getById(id: string): LocalityDto {
    return this.localityRepository.getById(id);
  }

  addLocality({ name, countryId }: LocalityRequest): void {
    const country = this.countryRepository.getById(countryId);
    this.localityRepository.save(new Locality(randomUUID(), name, country));
  }
}

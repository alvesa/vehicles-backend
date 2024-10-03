import { Inject, Injectable } from '@nestjs/common';
import { Country, DatasetRepository, Locality } from '../../infra';
import { BaseService } from '../services/base.service';
import { LocalityResponse } from '../../application';
import { LocalityDto } from '../../domain';

@Injectable()
export class LocalityService extends BaseService<
  LocalityDto,
  LocalityResponse
> {
  constructor(
    @Inject('LOCALITY_REPOSITORY')
    private readonly localityRepository: DatasetRepository<Locality>,
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: DatasetRepository<Country>,
  ) {
    super();
  }

  getAll(): Locality[] {
    return this.localityRepository.getAll();
  }

  getById(id: string): Locality {
    return this.localityRepository.getById(id);
  }

  add(entity: Locality): string {
    const country = this.countryRepository.getById(entity.countryId);
    return this.localityRepository.save(new Locality(entity.name, country.id));
  }
  update(entity: Locality): void {
    console.log({ entity });
  }
  delete(id: string): void {
    console.log({ id });
  }
}

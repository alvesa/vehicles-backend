import { Module } from '@nestjs/common';
import {
  Brand,
  BrandRepository,
  Country,
  CountryRepository,
  DatasetRepository,
  Locality,
  LocalityRepository,
  MockDataset,
  User,
  UserRepository,
} from 'infra';

@Module({
  imports: [],
  providers: [
    MockDataset,
    {
      useValue: DatasetRepository<User>,
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      useValue: DatasetRepository<Locality>,
      provide: 'LOCALITY_REPOSITORY',
      useClass: LocalityRepository,
    },
    {
      useValue: DatasetRepository<Country>,
      provide: 'COUNTRY_REPOSITORY',
      useClass: CountryRepository,
    },
    {
      useValue: DatasetRepository<Brand>,
      provide: 'BRAND_REPOSITORY',
      useClass: BrandRepository,
    },
  ],
  exports: [
    MockDataset,
    {
      useValue: DatasetRepository<User>,
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      useValue: DatasetRepository<Locality>,
      provide: 'LOCALITY_REPOSITORY',
      useClass: LocalityRepository,
    },
    {
      useValue: DatasetRepository<Country>,
      provide: 'COUNTRY_REPOSITORY',
      useClass: CountryRepository,
    },
    {
      useValue: DatasetRepository<Brand>,
      provide: 'BRAND_REPOSITORY',
      useClass: BrandRepository,
    },
  ],
})
export class VehiclesInfraModule {}

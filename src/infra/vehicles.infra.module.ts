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
  Model,
  User,
  UserRepository,
  ModelRepository,
  VoteType,
  VoteTypeRepository,
  Fuel,
  Opinion,
  FuelRepository,
  OpinionRepository,
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
    {
      useValue: DatasetRepository<Model>,
      provide: 'MODEL_REPOSITORY',
      useClass: ModelRepository,
    },
    {
      useValue: DatasetRepository<VoteType>,
      provide: 'VOTE_TYPE_REPOSITORY',
      useClass: VoteTypeRepository,
    },
    {
      useValue: DatasetRepository<Fuel>,
      provide: 'FUEL_REPOSITORY',
      useClass: FuelRepository,
    },
    {
      useValue: DatasetRepository<Opinion>,
      provide: 'OPINION_REPOSITORY',
      useClass: OpinionRepository,
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
    {
      useValue: DatasetRepository<Model>,
      provide: 'MODEL_REPOSITORY',
      useClass: ModelRepository,
    },
    {
      useValue: DatasetRepository<VoteType>,
      provide: 'VOTE_TYPE_REPOSITORY',
      useClass: VoteTypeRepository,
    },
    {
      useValue: DatasetRepository<Fuel>,
      provide: 'FUEL_REPOSITORY',
      useClass: FuelRepository,
    },
    {
      useValue: DatasetRepository<Opinion>,
      provide: 'OPINION_REPOSITORY',
      useClass: OpinionRepository,
    },
  ],
})
export class VehiclesInfraModule {}

import { Module } from '@nestjs/common';
import {
  Brand,
  Country,
  Fuel,
  Locality,
  Model,
  Opinion,
  User,
  VehiclesInfraModule,
  Version,
  VoteType,
} from 'infra';

import {
  FuelService,
  VoteTypeService,
  OpinionService,
  BaseService,
  VersionService,
  UserService,
  CountryService,
  LocalityService,
  BrandService,
  ModelService,
} from './';

@Module({
  imports: [VehiclesInfraModule],
  providers: [
    {
      provide: BaseService<Opinion>,
      useClass: OpinionService,
    },
    {
      provide: BaseService<Version>,
      useClass: VersionService,
    },
    {
      provide: BaseService<User>,
      useClass: UserService,
    },
    {
      provide: BaseService<Country>,
      useClass: CountryService,
    },
    {
      provide: BaseService<Locality>,
      useClass: LocalityService,
    },
    {
      provide: BaseService<Brand>,
      useClass: BrandService,
    },
    {
      provide: BaseService<Model>,
      useClass: ModelService,
    },
    {
      provide: BaseService<VoteType>,
      useClass: VoteTypeService,
    },
    {
      provide: BaseService<Fuel>,
      useClass: FuelService,
    },
  ],
  exports: [
    {
      provide: BaseService<Opinion>,
      useClass: OpinionService,
    },
    {
      provide: BaseService<Version>,
      useClass: VersionService,
    },
    {
      provide: BaseService<User>,
      useClass: UserService,
    },
    {
      provide: BaseService<Country>,
      useClass: CountryService,
    },
    {
      provide: BaseService<Locality>,
      useClass: LocalityService,
    },
    {
      provide: BaseService<Brand>,
      useClass: BrandService,
    },
    {
      provide: BaseService<Model>,
      useClass: ModelService,
    },
    {
      provide: BaseService<VoteType>,
      useClass: VoteTypeService,
    },

    {
      provide: BaseService<Fuel>,
      useClass: FuelService,
    },
  ],
})
export class VehiclesDomainModule {}

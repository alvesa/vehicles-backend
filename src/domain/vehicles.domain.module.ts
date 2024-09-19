import { Module } from '@nestjs/common';
import { VehiclesInfraModule, Version } from 'infra';

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
    OpinionService,
    {
      provide: BaseService<Version>,
      useClass: VersionService,
    },
    UserService,
    CountryService,
    LocalityService,
    BrandService,
    ModelService,
    VoteTypeService,
    FuelService,
  ],
  exports: [
    VehiclesInfraModule,
    OpinionService,
    {
      provide: BaseService<Version>,
      useClass: VersionService,
    },
    UserService,
    CountryService,
    LocalityService,
    BrandService,
    ModelService,
    VoteTypeService,
    FuelService,
  ],
})
export class VehiclesDomainModule {}

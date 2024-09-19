import { Module } from '@nestjs/common';
import {
  BaseService,
  BrandService,
  CountryService,
  FuelService,
  LocalityService,
  ModelService,
  OpinionService,
  UserService,
  VehiclesDomainModule,
  VersionService,
  VoteTypeService,
} from '../domain';
import {
  BrandController,
  CountryController,
  FuelController,
  LocalityController,
  ModelController,
  OpinionController,
  UserController,
  VersionController,
  VoteTypeController,
} from 'application';
import { Version } from 'infra';

@Module({
  imports: [VehiclesDomainModule],
  controllers: [
    UserController,
    CountryController,
    LocalityController,
    BrandController,
    ModelController,
    VoteTypeController,
    FuelController,
    VersionController,
    OpinionController,
  ],
  providers: [
    UserService,
    CountryService,
    LocalityService,
    BrandService,
    ModelService,
    VoteTypeService,
    FuelService,
    {
      provide: BaseService<Version>,
      useClass: VersionService,
    },
    OpinionService,
  ],
  exports: [],
})
export class VehiclesApplicationModule {}

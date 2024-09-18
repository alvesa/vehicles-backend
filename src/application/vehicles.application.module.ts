import { Module } from '@nestjs/common';
import {
  BrandService,
  CountryService,
  FuelService,
  LocalityService,
  ModelService,
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
  UserController,
  VersionController,
  VoteTypeController,
} from 'application';
import { BaseService } from 'domain/base.service';
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
  ],
  exports: [],
})
export class VehiclesApplicationModule {}

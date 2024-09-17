import { Module } from '@nestjs/common';
import {
  BrandService,
  CountryService,
  LocalityService,
  ModelService,
  UserService,
  VehiclesDomainModule,
} from '../domain';
import {
  BrandController,
  CountryController,
  LocalityController,
  ModelController,
  UserController,
} from 'application';

@Module({
  imports: [VehiclesDomainModule],
  controllers: [
    UserController,
    CountryController,
    LocalityController,
    BrandController,
    ModelController,
  ],
  providers: [
    UserService,
    CountryService,
    LocalityService,
    BrandService,
    ModelService,
  ],
  exports: [],
})
export class VehiclesApplicationModule {}

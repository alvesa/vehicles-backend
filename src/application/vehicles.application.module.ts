import { Module } from '@nestjs/common';
import { VehiclesDomainModule } from '../domain';
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
  providers: [],
  exports: [],
})
export class VehiclesApplicationModule {}

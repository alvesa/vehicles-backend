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
import { VehicleController } from './controllers/vehicle/vehicle.controller';

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
    VehicleController,
  ],
  providers: [],
  exports: [],
})
export class VehiclesApplicationModule {}

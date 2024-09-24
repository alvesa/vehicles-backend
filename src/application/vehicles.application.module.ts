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
import { GearController } from './controllers/gear/gear.controller';

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
    GearController,
  ],
  providers: [],
  exports: [],
})
export class VehiclesApplicationModule {}

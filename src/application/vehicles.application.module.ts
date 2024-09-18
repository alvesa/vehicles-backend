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
import { VoteTypeController } from './controllers/voteType/voteType.controller';
import { VoteTypeService } from 'domain/voteType.service';
import { FuelController } from './controllers/fuel/fuel.controller';
import { FuelService } from 'domain/fuel.service';

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
  ],
  providers: [
    UserService,
    CountryService,
    LocalityService,
    BrandService,
    ModelService,
    VoteTypeService,
    FuelService,
  ],
  exports: [],
})
export class VehiclesApplicationModule {}

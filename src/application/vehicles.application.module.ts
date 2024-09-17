import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import {
  CountryService,
  ModelService,
  UserService,
  VehiclesDomainModule,
} from '../domain';
import { CountryController } from './controllers/country/country.controller';
import { LocalityController } from './controllers/locality/locality.controller';
import { LocalityService } from 'domain/locality.service';
import { BrandController } from './controllers/brand/brand.controller';
import { BrandService } from 'domain/brand.service';
import { ModelController } from './controllers/model/model.controller';

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
    BrandService,
    ModelService,
  ],
  exports: [
    UserService,
    VehiclesDomainModule,
    CountryService,
    LocalityService,
    ModelService,
  ],
})
export class VehiclesApplicationModule {}

import { Module } from '@nestjs/common';
import { VehiclesInfraModule } from '../infra';

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
  GearService,
  VehicleService,
  UserBaseService,
  OpinionDto,
  BrandDto,
  ModelDto,
  VersionDto,
  VehicleDto,
  VoteTypeDto,
  FuelDto,
  GearDto,
} from './';
import {
  BrandResponse,
  CountryResponse,
  FuelResponse,
  GearResponse,
  LocalityResponse,
  ModelResponse,
  OpinionResponse,
  VersionResponse,
  VoteTypeResponse,
} from 'application';
import { CountryDto } from './dtos/coutry.dto';
import { LocalityDto } from './dtos/locality.dto';
import { VehicleResponse } from 'application/controllers/vehicle/vehicle.controller';

const opinionServiceProvider = {
  provide: 'OPINION_SERVICE',
  useValue: BaseService<OpinionDto, OpinionResponse>,
  useClass: OpinionService,
};

const userServiceProvider = {
  provide: 'USER_SERVICE',
  useValue: UserBaseService,
  useClass: UserService,
};

const countryServiceProvider = {
  provide: 'COUNTRY_SERVICE',
  useValue: BaseService<CountryDto, CountryResponse>,
  useClass: CountryService,
};

const localityServiceProvider = {
  provide: 'LOCALITY_SERVICE',
  useValue: BaseService<LocalityDto, LocalityResponse>,
  useClass: LocalityService,
};

const brandServiceProvider = {
  provide: 'BRAND_SERVICE',
  useValue: BaseService<BrandDto, BrandResponse>,
  useClass: BrandService,
};

const modelServiceProvider = {
  provide: 'MODEL_SERVICE',
  useValue: BaseService<ModelDto, ModelResponse>,
  useClass: ModelService,
};

const versionServiceProvider = {
  provide: 'VERSION_SERVICE',
  useValue: BaseService<VersionDto, VersionResponse>,
  useClass: VersionService,
};

const vehicleServiceProvider = {
  provide: 'VEHICLE_SERVICE',
  useValue: BaseService<VehicleDto, VehicleResponse>,
  useClass: VehicleService,
};

const voteTypeServiceProvider = {
  provide: 'VOTE_TYPE_SERVICE',
  useValue: BaseService<VoteTypeDto, VoteTypeResponse>,
  useClass: VoteTypeService,
};

const fuelServiceProvider = {
  provide: 'FUEL_SERVICE',
  useValue: BaseService<FuelDto, FuelResponse>,
  useClass: FuelService,
};

const gearServiceProvider = {
  provide: 'GEAR_SERVICE',
  useValue: BaseService<GearDto, GearResponse>,
  useClass: GearService,
};
@Module({
  imports: [VehiclesInfraModule],
  providers: [
    opinionServiceProvider,
    versionServiceProvider,
    userServiceProvider,
    countryServiceProvider,
    localityServiceProvider,
    brandServiceProvider,
    modelServiceProvider,
    versionServiceProvider,
    vehicleServiceProvider,
    voteTypeServiceProvider,
    fuelServiceProvider,
    gearServiceProvider,
  ],
  exports: [
    opinionServiceProvider,
    versionServiceProvider,
    userServiceProvider,
    countryServiceProvider,
    localityServiceProvider,
    brandServiceProvider,
    modelServiceProvider,
    versionServiceProvider,
    vehicleServiceProvider,
    voteTypeServiceProvider,
    fuelServiceProvider,
    gearServiceProvider,
  ],
})
export class VehiclesDomainModule {}

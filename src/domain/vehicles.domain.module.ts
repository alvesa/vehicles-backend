import { Module } from '@nestjs/common';
import {
  Brand,
  Country,
  Fuel,
  Gear,
  Locality,
  Model,
  Opinion,
  Vehicle,
  VehiclesInfraModule,
  Version,
  VoteType,
} from 'infra';

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
} from './';

const opinionServiceProvider = {
  provide: 'OPINION_SERVICE',
  useValue: BaseService<Opinion>,
  useClass: OpinionService,
};

const userServiceProvider = {
  provide: 'USER_SERVICE',
  useValue: UserBaseService,
  useClass: UserService,
};

const countryServiceProvider = {
  provide: 'COUNTRY_SERVICE',
  useValue: BaseService<Country>,
  useClass: CountryService,
};

const localityServiceProvider = {
  provide: 'LOCALITY_SERVICE',
  useValue: BaseService<Locality>,
  useClass: LocalityService,
};

const brandServiceProvider = {
  provide: 'BRAND_SERVICE',
  useValue: BaseService<Brand>,
  useClass: BrandService,
};

const modelServiceProvider = {
  provide: 'MODEL_SERVICE',
  useValue: BaseService<Model>,
  useClass: ModelService,
};

const versionServiceProvider = {
  provide: 'VERSION_SERVICE',
  useValue: BaseService<Version>,
  useClass: VersionService,
};

const vehicleServiceProvider = {
  provide: 'VEHICLE_SERVICE',
  useValue: BaseService<Vehicle>,
  useClass: VehicleService,
};

const voteTypeServiceProvider = {
  provide: 'VOTE_TYPE_SERVICE',
  useValue: BaseService<VoteType>,
  useClass: VoteTypeService,
};

const fuelServiceProvider = {
  provide: 'FUEL_SERVICE',
  useValue: BaseService<Fuel>,
  useClass: FuelService,
};

const gearServiceProvider = {
  provide: 'GEAR_SERVICE',
  useValue: BaseService<Gear>,
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

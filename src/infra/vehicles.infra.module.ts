import { Module } from '@nestjs/common';
import {
  Brand,
  BrandRepository,
  Country,
  CountryRepository,
  DatasetRepository,
  Locality,
  LocalityRepository,
  MockDataset,
  Model,
  User,
  UserRepository,
  ModelRepository,
  VoteType,
  VoteTypeRepository,
  Fuel,
  Opinion,
  FuelRepository,
  OpinionRepository,
  Vehicle,
  Gear,
} from 'infra';
import { VehicleRepository } from './repositories/vehicle/vehicle.repository';
import { GearRespository } from './repositories/gear/gear.repository';

const userRepoProvider = {
  useValue: DatasetRepository<User>,
  provide: 'USER_REPOSITORY',
  useClass: UserRepository,
};

const localityRepoProvider = {
  useValue: DatasetRepository<Locality>,
  provide: 'LOCALITY_REPOSITORY',
  useClass: LocalityRepository,
};

const countryRepoProvider = {
  useValue: DatasetRepository<Country>,
  provide: 'COUNTRY_REPOSITORY',
  useClass: CountryRepository,
};

const brandRepoProvider = {
  useValue: DatasetRepository<Brand>,
  provide: 'BRAND_REPOSITORY',
  useClass: BrandRepository,
};

const modelRepoProvider = {
  useValue: DatasetRepository<Model>,
  provide: 'MODEL_REPOSITORY',
  useClass: ModelRepository,
};

const voteTypeRepoProvider = {
  useValue: DatasetRepository<VoteType>,
  provide: 'VOTE_TYPE_REPOSITORY',
  useClass: VoteTypeRepository,
};

const fuelRepoProvider = {
  useValue: DatasetRepository<Fuel>,
  provide: 'FUEL_REPOSITORY',
  useClass: FuelRepository,
};

const opinionRepoProvider = {
  useValue: DatasetRepository<Opinion>,
  provide: 'OPINION_REPOSITORY',
  useClass: OpinionRepository,
};

const vehicleRepoProvider = {
  useValue: DatasetRepository<Vehicle>,
  provide: 'VEHICLE_REPOSITORY',
  useClass: VehicleRepository,
};

const gearRepoProvider = {
  useValue: DatasetRepository<Gear>,
  provide: 'GEAR_REPOSITORY',
  useClass: GearRespository,
};

@Module({
  imports: [],
  providers: [
    MockDataset,
    userRepoProvider,
    brandRepoProvider,
    countryRepoProvider,
    localityRepoProvider,
    modelRepoProvider,
    voteTypeRepoProvider,
    fuelRepoProvider,
    opinionRepoProvider,
    vehicleRepoProvider,
    gearRepoProvider,
  ],
  exports: [
    MockDataset,
    userRepoProvider,
    brandRepoProvider,
    countryRepoProvider,
    localityRepoProvider,
    modelRepoProvider,
    voteTypeRepoProvider,
    fuelRepoProvider,
    opinionRepoProvider,
    vehicleRepoProvider,
    gearRepoProvider,
  ],
})
export class VehiclesInfraModule {}

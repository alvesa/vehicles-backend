import { Module } from '@nestjs/common';
import {
  DatasetRepository,
  Locality,
  LocalityRepository,
  MockDataset,
  User,
  UserRepository,
  VehiclesInfraModule,
} from '../infra';

@Module({
  imports: [VehiclesInfraModule],
  providers: [
    MockDataset,
    {
      provide: DatasetRepository<User>,
      useClass: UserRepository,
    },
    {
      provide: DatasetRepository<Locality>,
      useClass: LocalityRepository,
    },
  ],
  exports: [VehiclesInfraModule],
})
export class VehiclesDomainModule {}

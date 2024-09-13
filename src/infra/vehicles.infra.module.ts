import { Module } from '@nestjs/common';
import { MockDataset } from './db/mock/mock-dataset';
import { DatasetRepository } from './repositories/dataset.repository';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user/user.repository';
import { Locality } from './entities/locality.entity';
import { LocalityRepository } from './repositories/locality/locality.repository';

@Module({
  imports: [],
  providers: [
    MockDataset,
    {
      useValue: DatasetRepository<User>,
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      useValue: DatasetRepository<Locality>,
      provide: 'LOCALITY_REPOSITORY',
      useClass: LocalityRepository,
    },
  ],
  exports: [
    MockDataset,
    {
      useValue: DatasetRepository<User>,
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      useValue: DatasetRepository<Locality>,
      provide: 'LOCALITY_REPOSITORY',
      useClass: LocalityRepository,
    },
  ],
})
export class VehiclesInfraModule {}

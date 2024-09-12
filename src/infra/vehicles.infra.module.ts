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
      provide: DatasetRepository<User>,
      useClass: UserRepository,
    },
    {
      provide: DatasetRepository<Locality>,
      useClass: LocalityRepository,
    },
  ],
  exports: [
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
})
export class VehiclesInfraModule {}

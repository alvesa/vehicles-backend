import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../domain/user.service';
import { UserRepository } from '../../infra/repositories/user/user.repository';
import { MockDataset } from '../../infra/db/mock/mock-dataset';
import { DatasetRepository } from '../../infra/repositories/dataset.repository';
import { LocalityRepository } from '../../infra/repositories/locality/locality.repository';
import { Locality } from '../../infra/entities/locality.entity';
import { User } from '../../infra/entities/user.entity';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: DatasetRepository<User>,
      useClass: UserRepository,
    },
    {
      provide: DatasetRepository<Locality>,
      useClass: LocalityRepository,
    },
    MockDataset,
  ],
  exports: [DatasetRepository<User>, DatasetRepository<Locality>, MockDataset],
})
export class UserApplicationModule {}

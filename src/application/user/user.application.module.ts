import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../domain/user.service';
import { UserRepository } from '../../infra/repositories/user/user.repository';
import { MockDataset } from '../../infra/db/mock/mock-dataset';
import { DatasetBase } from '../../infra/db/dataset-base';
import { DatasetRepository } from '../../infra/repositories/dataset.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: DatasetRepository,
      useClass: UserRepository,
    },
    { provide: DatasetBase, useClass: MockDataset },
  ],
  exports: [],
})
export class UserApplicationModule {}

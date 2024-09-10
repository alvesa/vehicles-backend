import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../domain/user.service';
import { UserRepository } from '../../infra/repositories/user.repository';
import { MockDb } from '../../infra/db/mock.db';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, MockDb],
  exports: [],
})
export class UserApplicationModule {}

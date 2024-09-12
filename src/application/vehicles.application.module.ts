import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService, VehiclesDomainModule } from '../domain';

@Module({
  imports: [VehiclesDomainModule],
  providers: [UserService],
  exports: [UserService, VehiclesDomainModule],
  controllers: [UserController],
})
export class VehiclesApplicationModule {}

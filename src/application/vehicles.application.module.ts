import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { CountryService, UserService, VehiclesDomainModule } from '../domain';
import { CountryController } from './controllers/auth/country.controller';

@Module({
  imports: [VehiclesDomainModule],
  providers: [UserService, CountryService],
  exports: [UserService, VehiclesDomainModule, CountryService],
  controllers: [UserController, CountryController],
})
export class VehiclesApplicationModule {}

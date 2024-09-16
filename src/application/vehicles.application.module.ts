import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { CountryService, UserService, VehiclesDomainModule } from '../domain';
import { CountryController } from './controllers/country/country.controller';
import { LocalityController } from './controllers/locality/locality.controller';
import { LocalityService } from 'src/domain/locality.service';

@Module({
  imports: [VehiclesDomainModule],
  controllers: [UserController, CountryController, LocalityController],
  providers: [UserService, CountryService, LocalityService],
  exports: [UserService, VehiclesDomainModule, CountryService, LocalityService],
})
export class VehiclesApplicationModule {}

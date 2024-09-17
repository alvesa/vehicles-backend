import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { CountryService, UserService, VehiclesDomainModule } from '../domain';
import { CountryController } from './controllers/country/country.controller';
import { LocalityController } from './controllers/locality/locality.controller';
import { LocalityService } from 'domain/locality.service';
import { BrandController } from './controllers/brand/brand.controller';
import { BrandService } from 'domain/brand.service';

@Module({
  imports: [VehiclesDomainModule],
  controllers: [
    UserController,
    CountryController,
    LocalityController,
    BrandController,
  ],
  providers: [UserService, CountryService, LocalityService, BrandService],
  exports: [UserService, VehiclesDomainModule, CountryService, LocalityService],
})
export class VehiclesApplicationModule {}

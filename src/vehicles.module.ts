import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DistrictModule } from './district/district.module';

@Module({
  imports: [UserModule, DistrictModule],
  controllers: [],
  providers: [],
})
export class VehiclesModule {}

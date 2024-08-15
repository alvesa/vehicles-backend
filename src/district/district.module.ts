import { Module } from '@nestjs/common';
import { DistrictRepository } from './district.repository';

@Module({
  controllers: [],
  providers: [DistrictRepository],
  exports: [],
})
export class DistrictModule {}

import { Module } from '@nestjs/common';
import { VehiclesApplicationModule } from './application/vehicles.application.module';

@Module({
  imports: [VehiclesApplicationModule],
  providers: [],
  exports: [VehiclesApplicationModule],
})
export class VehiclesModule {}

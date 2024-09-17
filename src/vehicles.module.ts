import { Module } from '@nestjs/common';
import { VehiclesApplicationModule } from 'application';

@Module({
  imports: [VehiclesApplicationModule],
  providers: [],
  exports: [VehiclesApplicationModule],
})
export class VehiclesModule {}

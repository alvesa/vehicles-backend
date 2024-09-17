import { Module } from '@nestjs/common';
import { VehiclesInfraModule } from 'infra';

@Module({
  imports: [VehiclesInfraModule],
  providers: [],
  exports: [VehiclesInfraModule],
})
export class VehiclesDomainModule {}

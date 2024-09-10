import { Module } from '@nestjs/common';
import { UserApplicationModule } from './application/user/user.application.module';

@Module({
  imports: [UserApplicationModule],
  controllers: [],
  providers: [],
})
export class VehiclesModule {}

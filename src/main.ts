import { NestFactory } from '@nestjs/core';
import { VehiclesModule } from './vehicles.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(VehiclesModule);
  await app.listen(3000);
}
bootstrap();

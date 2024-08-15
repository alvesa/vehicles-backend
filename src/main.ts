import { NestFactory } from '@nestjs/core';
import { VehiclesModule } from './vehicles.module';

async function bootstrap() {
  const app = await NestFactory.create(VehiclesModule);
  await app.listen(3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Brand } from 'infra/entities';
import { Model } from 'mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:root@mongo:27017/vehicle')],
  providers: [Model<Brand>],
  exports: [Model<Brand>],
})
export class MongoModule {}

import { Injectable } from '@nestjs/common';
import { Brand } from '../../../infra';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BrandRepository {
  constructor(@InjectModel(Brand.name) private readonly model: Model<Brand>) {}

  async getAll(): Promise<any[]> {
    return await this.model.find().exec();
  }
  async getById(id: string): Promise<any> {
    return await this.model.findById(id).exec();
  }

  async save(entity: any): Promise<string> {
    const created = new this.model(entity);
    return (await created.save())._id.toString();
  }
  update(entity: any): void {
    this.model.updateOne({ _id: entity.id }, entity).exec();
  }
  delete(id: string): void {
    this.model.deleteOne({ _id: id }).exec();
  }
}

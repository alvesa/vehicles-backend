import { randomUUID } from 'crypto';
import { Brand } from './brand.entity';

export class Model {
  id: string;
  name: string;
  brandId: string;
  brand: Brand;

  constructor(name: string, brandId: string) {
    this.id = randomUUID();
    this.name = name;
    this.brandId = brandId;
  }
}

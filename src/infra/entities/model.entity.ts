import { Brand } from './brand.entity';

export class Model {
  id: string;
  name: string;
  brandId: string;
  brand: Brand;
}

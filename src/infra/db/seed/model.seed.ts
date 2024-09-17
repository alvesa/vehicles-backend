import { Model } from 'infra';
import { brands } from './brand.seed';

export const models: Model[] = [
  {
    id: '1',
    name: 'model1',
    brandId: '1',
    brand: brands.find((brand) => brand.id === '1'),
  },
  {
    id: '2',
    name: 'model2',
    brandId: '2',
    brand: brands.find((brand) => brand.id === '2'),
  },
  {
    id: '3',
    name: 'model3',
    brandId: '3',
    brand: brands.find((brand) => brand.id === '3'),
  },
];

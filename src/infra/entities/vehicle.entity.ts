import { Locality } from './locality.entity';
import { Fuel } from './fuel.entity';
import { Model } from './model.entity';

export class Vehicle {
  id: string;
  modelId: Model;
  localityId: Locality;
  version: string;
  fuelId: Fuel;
  yearRegistry: string;
  monthRegistry: string;
  kms: string;
  hp: string;
  active: boolean;
}

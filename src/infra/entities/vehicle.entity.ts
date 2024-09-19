import { Locality } from './locality.entity';
import { Fuel } from './fuel.entity';
import { Model } from './model.entity';
import { Version } from './version.entity';

export class Vehicle {
  id: string;
  modelId: string;
  model: Model;
  localityId: string;
  locality: Locality;
  versionId: string;
  version: Version;
  fuelId: string;
  fuel: Fuel;
  yearRegistry: string;
  monthRegistry: string;
  kms: string;
  hp: string;
  active: boolean;

  constructor(
    id: string,
    modelId: string,
    localityId: string,
    versionId: string,
    fuelId: string,
    yearRegistry: string,
    monthRegistry: string,
    kms: string,
    hp: string,
    active: boolean,
  ) {
    this.id = id;
    this.modelId = modelId;
    this.localityId = localityId;
    this.versionId = versionId;
    this.fuelId = fuelId;
    this.yearRegistry = yearRegistry;
    this.monthRegistry = monthRegistry;
    this.kms = kms;
    this.hp = hp;
    this.active = active;
  }
}

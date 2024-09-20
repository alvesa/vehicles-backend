import { Locality } from './locality.entity';
import { Fuel } from './fuel.entity';
import { Model } from './model.entity';
import { Version } from './version.entity';
import { randomUUID } from 'crypto';

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
  year: string;
  month: string;
  kms: string;
  hp: string;
  active: boolean;

  constructor(
    modelId: string,
    localityId: string,
    versionId: string,
    fuelId: string,
    year: string,
    monthRegistry: string,
    kms: string,
    hp: string,
    active: boolean,
  ) {
    this.id = randomUUID();
    this.modelId = modelId;
    this.localityId = localityId;
    this.versionId = versionId;
    this.fuelId = fuelId;
    this.year = year;
    this.month = monthRegistry;
    this.kms = kms;
    this.hp = hp;
    this.active = active;
  }
}

export class VehicleDto {
  modelId: string;
  localityId: string;
  versionId: string;
  fuelId: string;
  year: string;
  month: string;
  kms: string;
  hp: string;
  gearId: string;
  active: boolean;

  constructor(
    modelId: string,
    localityId: string,
    versionId: string,
    fuelId: string,
    year: string,
    month: string,
    kms: string,
    hp: string,
    gearId: string,
    active: boolean,
  ) {
    this.modelId = modelId;
    this.localityId = localityId;
    this.versionId = versionId;
    this.fuelId = fuelId;
    this.year = year;
    this.month = month;
    this.kms = kms;
    this.hp = hp;
    this.gearId = gearId;
    this.active = active;
  }
}

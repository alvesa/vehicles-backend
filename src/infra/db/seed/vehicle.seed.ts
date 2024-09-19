import { Vehicle } from 'infra/entities/vehicle.entity';
import { models } from './model.seed';
import { localities } from './locality.seed';
import { versions } from './version.seed';
import { fuels } from './fuel.seed';

const model = models.find((item) => item.id === '1');
const locality = localities.find((item) => item.id === '1');
const version = versions.find((item) => item.id === '1');
const fuel = fuels.find((item) => item.id === '1');

export const vehicles: Vehicle[] = [
  {
    id: '1',
    modelId: model.id,
    model: model,
    localityId: locality.id,
    locality: locality,
    versionId: version.id,
    version: version,
    fuelId: fuel.id,
    fuel: fuel,
    yearRegistry: 'year1',
    monthRegistry: 'month1',
    kms: 'kms1',
    hp: 'hp1',
    active: true,
  },
  {
    id: '2',
    modelId: model.id,
    model: model,
    localityId: locality.id,
    locality: locality,
    versionId: version.id,
    version: version,
    fuelId: fuel.id,
    fuel: fuel,
    yearRegistry: 'year2',
    monthRegistry: 'month2',
    kms: 'kms2',
    hp: 'hp2',
    active: true,
  },
];

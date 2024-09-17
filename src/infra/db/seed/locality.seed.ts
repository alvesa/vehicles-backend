import { Locality } from 'infra';
import { countries } from './country.seed';

export const localities: Locality[] = [
  {
    id: '1',
    name: 'locality1',
    country: countries[0],
  },
  {
    id: '2',
    name: 'locality2',
    country: countries[1],
  },
  {
    id: '3',
    name: 'locality3',
    country: countries[2],
  },
];

import { Locality } from '../../entities/locality.entity';
import { countries } from './country.seed';

export const localities: Locality[] = [
  {
    id: '1',
    name: 'locality1',
    countryId: '1',
    country: countries?.find((country) => country.id === '1'),
  },
  {
    id: '2',
    name: 'locality2',
    countryId: '2',
    country: countries?.find((country) => country.id === '2'),
  },
  {
    id: '3',
    name: 'locality3',
    countryId: '3',
    country: countries?.find((country) => country.id === '3'),
  },
];

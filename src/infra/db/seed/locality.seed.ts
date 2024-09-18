import { countries, Locality } from 'infra';

export const localities: Locality[] = [
  {
    id: '1',
    name: 'locality1',
    country: countries?.find((country) => country.id === '1'),
  },
  {
    id: '2',
    name: 'locality2',
    country: countries?.find((country) => country.id === '2'),
  },
  {
    id: '3',
    name: 'locality3',
    country: countries?.find((country) => country.id === '3'),
  },
];

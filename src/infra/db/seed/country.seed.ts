import { Country } from 'infra/entities/country.entity';

export const countries: Country[] = [
  new Country('1', 'country1', true),
  new Country('2', 'country2', true),
  new Country('3', 'country3', false),
  new Country('4', 'country4', true),
  new Country('5', 'country5', false),
];

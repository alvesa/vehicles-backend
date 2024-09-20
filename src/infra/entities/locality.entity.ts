import { randomUUID } from 'crypto';
import { Country } from './country.entity';

export class Locality {
  id: string;
  name: string;
  countryId: string;
  country: Country;

  constructor(name: string, countryId: string) {
    this.id = randomUUID();
    this.name = name;
    this.countryId = countryId;
  }
}

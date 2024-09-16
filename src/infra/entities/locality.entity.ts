import { Country } from './country.entity';

export class Locality {
  id: string;
  name: string;
  country: Country;

  constructor(id: string, name: string, country: Country) {
    this.id = id;
    this.name = name;
    this.country = country;
  }
}

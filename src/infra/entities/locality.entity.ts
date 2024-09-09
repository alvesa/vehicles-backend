import { Country } from './country.entity';

export class Locality {
  id: string;
  name: string;
  countryId: Country;
}

import { randomUUID } from 'crypto';
import { CountryDto } from './coutry.dto';

export class LocalityDto {
  id: string;
  name: string;
  countryId: string;
  country: CountryDto;

  constructor(name: string, countryId: string) {
    this.id = randomUUID();
    this.name = name;
    this.countryId = countryId;
  }
}

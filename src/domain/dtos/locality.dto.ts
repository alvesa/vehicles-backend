import { CountryDto } from './country.dto';
import { Expose } from 'class-transformer';

export class LocalityDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  countryId: string;

  @Expose()
  country: CountryDto;

  constructor(name: string, countryId: string) {
    this.name = name;
    this.countryId = countryId;
  }
}

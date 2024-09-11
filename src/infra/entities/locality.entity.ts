import { Country } from './country.entity';
import { EntityType } from './user.entity';

export class Locality extends EntityType {
  id: string;
  name: string;
  country: Country;
}

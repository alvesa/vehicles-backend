import { Locality } from './locality.entity';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  localityId: Locality;
  password: string;
}

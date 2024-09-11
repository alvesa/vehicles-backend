import { Locality } from './locality.entity';

export abstract class EntityType {
  id: string;
}

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  locality?: Locality;
  password: string;
}

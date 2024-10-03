import { randomUUID } from 'crypto';
import { Locality } from './locality.entity';

export class User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  localityId: string;
  locality: Locality;
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    localityId: string,
    locality: Locality,
    password: string,
  ) {
    this.id = randomUUID();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.localityId = localityId;
    this.locality = locality;
    this.password = password;
  }
}

import { Locality } from './locality.entity';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  localityId: string;
  locality: Locality;
  password: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    localityId: string,
    locality: Locality,
    password: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.localityId = localityId;
    this.locality = locality;
    this.password = password;
  }
}

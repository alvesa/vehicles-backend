import { LocalityDto } from './locality.dto';

export class UserDto {
  firstName: string;
  lastName: string;
  email: string;
  localityId: string;
  locality: LocalityDto;
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    localityId: string,
    password: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.localityId = localityId;
    this.password = password;
  }
}

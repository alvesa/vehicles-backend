import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  localityId: string;

  @Expose()
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

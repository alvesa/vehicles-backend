import { Expose } from 'class-transformer';

export class UserRequest {
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
}

import { Exclude, Expose } from 'class-transformer';
import { LocalityDto } from '../../../../domain';

export class UserResponse {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  localityId: string;

  @Expose()
  locality: LocalityDto;

  @Exclude()
  password: string;
}

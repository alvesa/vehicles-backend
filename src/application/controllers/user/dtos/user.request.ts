import { Expose } from 'class-transformer';
import { IsEmail, IsStrongPassword, MinLength } from 'class-validator';

export class UserRequest {
  @Expose()
  @MinLength(3)
  firstName: string;

  @Expose()
  @MinLength(3)
  lastName: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  localityId: string;

  @Expose()
  @MinLength(8)
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minUppercase: 1,
    minSymbols: 1,
    minLowercase: 1,
  })
  password: string;
}

import { Expose } from 'class-transformer';
import {
  IsEmail,
  IsString,
  IsStrongPassword,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserRequest {
  @Expose()
  @MinLength(3)
  @MaxLength(30)
  @IsString()
  @Matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ'’\-.\s]+$/g)
  firstName: string;

  @Expose()
  @MinLength(3)
  @MaxLength(30)
  @IsString()
  @Matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ'’\-.\s]+$/g)
  lastName: string;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @Matches(/[0-9]/g) // TODO: Remove after
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

import { randomUUID } from 'crypto';
import { Locality } from './locality.entity';
import { BadRequestException } from '@nestjs/common';

export class User {
  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(id: string) {
    this._id = id;
  }

  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(email: string) {
    if (!email) {
      throw new BadRequestException('Email is required');
    }

    if (!email.includes('@')) {
      throw new BadRequestException('Not valid email');
    }

    this._email = email;
  }

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

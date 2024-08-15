import { Injectable } from '@nestjs/common';

export class UserEntity {
  id: string;
  name: string;
  email: string;
  districtId: string;
  password: string;
}

@Injectable()
export class UserRepository {
  user: UserEntity[] = [];

  constructor() {
    this.user = [
      {
        id: '1',
        name: 'John',
        email: 'j@j.com',
        districtId: '1',
        password: '123',
      },
      {
        id: '2',
        name: 'Jane',
        email: 'j@j.com',
        districtId: '1',
        password: '123',
      },
      {
        id: '3',
        name: 'Jack',
        email: 'j@j.com',
        districtId: '2',
        password: '123',
      },
      {
        id: '4',
        name: 'Jill',
        email: 'j@j.com',
        districtId: '3',
        password: '123',
      },
    ];
  }

  getAll(): UserEntity[] {
    return this.user;
  }

  getById(id: string): UserEntity {
    return this.user.find((user) => user.id === id);
  }
}

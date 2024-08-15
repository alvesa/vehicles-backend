import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

export class UserDto {
  id: string;
  name: string;
  email: string;
  districtId: string;
  password: string;
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAll(): UserDto[] {
    return this.userRepository.getAll();
  }
}

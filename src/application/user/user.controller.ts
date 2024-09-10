import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../../domain/user.service';
import { Locality } from '../../infra/entities/locality.entity';

export class UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  localityId?: Locality;
  password: string;
}

export class UserRequest {
  firstName: string;
  lastName: string;
  email: string;
  localityId?: Locality;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): UserResponse[] {
    const users = this.userService.getAll();
    return users.map((user: UserResponse) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }));
  }

  @Post()
  AddUser(@Body() user: UserRequest): void {
    return this.userService.save(user);
  }
}

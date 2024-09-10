import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from '../../domain/user.service';
import { Locality } from '../../infra/entities/locality.entity';

export class UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  localityId?: Locality;
  password: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
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

    if (!users.length) throw new NotFoundException('Users not found');

    return users.map((user: UserResponse) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }));
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserResponse {
    const user = this.userService.getById(id);

    if (!user) throw new NotFoundException('User not found');

    return new UserResponse(
      user.id,
      user.firstName,
      user.lastName,
      user.email,
      user.password,
    );
  }

  @Post()
  AddUser(@Body() user: UserRequest): void {
    return this.userService.save(user);
  }
}

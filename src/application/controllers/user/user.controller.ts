import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { BaseService } from '../../../domain';
import { User } from 'infra';

export class UserRequest extends User {}

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: BaseService<User>,
  ) {}

  @Get()
  getAllUsers(): User[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.userService.getById(id);
  }

  @Post()
  addUser(@Body() user: UserRequest): void {
    return this.userService.add(user);
  }
}

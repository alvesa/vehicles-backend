import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { BaseService, UserBaseService, UserDto } from '../../../domain';
import { Locality, User } from 'infra';

export class UserRequest {
  firstName: string;
  lastName: string;
  email: string;
  localityId: string;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: UserBaseService,
    @Inject('LOCALITY_SERVICE')
    private readonly localityService: BaseService<Locality>,
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
    const result = this.userService.getByEmail(user.email);

    if (result) {
      throw new BadRequestException('User already exists');
    }

    const locality = this.localityService.getById(user.localityId);

    if (!locality) {
      throw new BadRequestException('Invalid locality');
    }

    return this.userService.add(
      new UserDto(
        user.firstName,
        user.lastName,
        user.email,
        user.localityId,
        locality,
        user.password,
      ),
    );
  }
}

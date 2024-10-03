import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import {
  BaseService,
  LocalityDto,
  UserBaseService,
  UserDto,
} from '../../../domain';

import { LocalityResponse } from '../locality/locality.controller';
import { UserRequest } from './dtos/user.request';
import { plainToClass } from 'class-transformer';
import { UserResponse } from './dtos/user.response';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: UserBaseService,
    @Inject('LOCALITY_SERVICE')
    private readonly localityService: BaseService<
      LocalityDto,
      LocalityResponse
    >,
  ) {}

  @Get()
  getAllUsers(): UserResponse[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): UserResponse {
    const user = this.userService.getById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return plainToClass(UserResponse, user, {
      excludeExtraneousValues: true,
    });
  }

  @Get(':email')
  getUserByEmail(@Param('email') email: string): UserResponse {
    const user = this.userService.getByEmail(email);

    return plainToClass(UserResponse, user, {
      excludeExtraneousValues: true,
    });
  }

  @Post()
  addUser(@Body() request: UserRequest): string {
    const user = plainToClass(UserRequest, request, {
      excludeExtraneousValues: true,
    });

    const result = this.userService.getByEmail(user.email);

    if (result) {
      throw new BadRequestException('User already exists');
    }

    const locality = this.localityService.getById(user.localityId);

    if (!locality) {
      throw new BadRequestException('Not valid locality');
    }

    return this.userService.add(
      new UserDto(
        user.firstName,
        user.lastName,
        user.email,
        user.localityId,
        user.password,
      ),
    );
  }
}

import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

export class UserResponse {
  id: string;
  name: string;
  email: string;
  districtId: string;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): UserResponse[] {
    return this.userService.getAll();
  }
}

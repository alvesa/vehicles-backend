import { UserDto } from '../dtos/user.dto';
import { User } from '../../infra';
import { UserResponse } from '../../application';

export abstract class BaseService<Dto, Res> {
  abstract getAll(): Res[];
  abstract getById(id: string): Res;
  abstract add(entity: Dto): string;
  abstract update(entity: Dto): void;
  abstract delete(id: string): void;
}

export abstract class UserBaseService extends BaseService<
  UserDto,
  UserResponse
> {
  abstract getByEmail(email: string): User;
}

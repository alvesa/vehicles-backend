import { User } from '../../entities/user.entity';
import { localities } from './locality.seed';

const locality = localities.find((item) => item.id === '1');

export const users: User[] = [
  new User(
    'firstName1',
    'lastName1',
    'email1@email.com',
    locality.id,
    locality,
    'password1',
  ),
  new User(
    'firstName2',
    'lastName2',
    'email2@email.com',
    locality.id,
    locality,
    'password2',
  ),
];

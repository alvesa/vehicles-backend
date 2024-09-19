import { User } from 'infra/entities/user.entity';
import { localities } from './locality.seed';

const locality = localities.find((item) => item.id === '1');

export const users: User[] = [
  {
    id: '1',
    firstName: 'firstName1',
    lastName: 'lastName1',
    email: 'email1',
    password: 'password1',
    localityId: locality.id,
    locality,
  },
  {
    id: '2',
    firstName: 'firstName2',
    lastName: 'lastName2',
    email: 'email2',
    password: 'password2',
    localityId: locality.id,
    locality,
  },
];

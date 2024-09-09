import { User } from './user.entity';
import { Opinion } from './opinion.entity';

export class UserOpinion {
  id: string;
  opinionId: Opinion;
  userId: User;
}

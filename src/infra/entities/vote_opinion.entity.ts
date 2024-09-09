import { Opinion } from './opinion.entity';
import { VoteType } from './vote_type.entity';

export class VoteTypeOpinion {
  id: string;
  opinionId: Opinion;
  voteTypeId: VoteType;
  vote: number;
}

import { Opinion } from './opinion.entity';
import { VoteType } from './voteType.entity';

export class VoteTypeOpinion {
  id: string;
  opinionId: Opinion;
  voteTypeId: VoteType;
  vote: number;
}

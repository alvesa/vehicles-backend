import { UserOpinion } from './user_opinion.entity';
import { Vehicle } from './vehicle.entity';
import { VoteTypeOpinion } from './vote_opinion.entity';

export class Opinion {
  id: string;
  description: string;
  negatives: string;
  positives: string;
  problems: string;
  generalOpinion: string;
  vehicleId: Vehicle;
  voteTypeOpinionId: VoteTypeOpinion[];
  userOpinionId: UserOpinion[];
}

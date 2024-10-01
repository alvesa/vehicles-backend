import { randomUUID } from 'crypto';
import { User, Vehicle, VoteType } from 'infra';

export class Opinion {
  id: string;
  title: string;
  negatives: string;
  positives: string;
  problems: string;
  general: string;
  vehicleId: string;
  vehicle: Vehicle;
  voteTypeOpinionId: string[];
  voteTypeOpinion: VoteType[];
  userOpinionId: string;
  userOpinion: User;

  constructor(
    title: string,
    negatives: string,
    positives: string,
    problems: string,
    general: string,
    vehicleId: string,
    voteTypeOpinionId: string[],
    userOpinionId: string,
  ) {
    this.id = randomUUID();
    this.title = title;
    this.negatives = negatives;
    this.positives = positives;
    this.problems = problems;
    this.general = general;
    this.vehicleId = vehicleId;
    this.voteTypeOpinionId = voteTypeOpinionId;
    this.userOpinionId = userOpinionId;
  }
}

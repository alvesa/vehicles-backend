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
    id: string,
    title: string,
    negatives: string,
    positives: string,
    problems: string,
    general: string,
    vehicleId: string,
    vehicle: Vehicle,
    voteTypeOpinionId: string[],
    voteTypeOpinion: VoteType[],
    userOpinionId: string,
    userOpinion: User,
  ) {
    this.id = id;
    this.title = title;
    this.negatives = negatives;
    this.positives = positives;
    this.problems = problems;
    this.general = general;
    this.vehicleId = vehicleId;
    this.vehicle = vehicle;
    this.voteTypeOpinionId = voteTypeOpinionId;
    this.voteTypeOpinion = voteTypeOpinion;
    this.userOpinionId = userOpinionId;
    this.userOpinion = userOpinion;
  }
}

export class OpinionRequest {
  title: string;
  negatives: string;
  positives: string;
  problems: string;
  general: string;
  vehicleId: string;
  voteTypeOpinionIds: string[];
  userOpinionId: string;

  constructor(
    title: string,
    negatives: string,
    positives: string,
    problems: string,
    general: string,
    vehicleId: string,
    voteTypeOpinionIds: string[],
    userOpinionId: string,
  ) {
    this.title = title;
    this.negatives = negatives;
    this.positives = positives;
    this.problems = problems;
    this.general = general;
    this.vehicleId = vehicleId;
    this.voteTypeOpinionIds = voteTypeOpinionIds;
    this.userOpinionId = userOpinionId;
  }
}

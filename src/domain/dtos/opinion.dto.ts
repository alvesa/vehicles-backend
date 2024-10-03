export class OpinionDto {
  title: string;
  negatives: string;
  positives: string;
  problems: string;
  general: string;
  vehicleId: string;
  voteTypeOpinionIds: string[];
  userId: string;

  private _id: string;
  public get id(): string {
    return this._id;
  }
  public set id(v: string) {
    this._id = v;
  }

  constructor(
    id: string,
    title: string,
    negatives: string,
    positives: string,
    problems: string,
    general: string,
    vehicleId: string,
    voteTypeOpinionIds: string[],
    userId: string,
  ) {
    this.id = id;
    this.title = title;
    this.negatives = negatives;
    this.positives = positives;
    this.problems = problems;
    this.general = general;
    this.vehicleId = vehicleId;
    this.voteTypeOpinionIds = voteTypeOpinionIds;
    this.userId = userId;
  }
}

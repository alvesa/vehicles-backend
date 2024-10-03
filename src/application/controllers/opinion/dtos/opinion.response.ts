export interface OpinionResponse {
  id: string;
  title: string;
  negatives: string;
  positives: string;
  problems: string;
  general: string;
  vehicleId: string;
  voteTypeOpinionIds: string[];
  userId: string;
}

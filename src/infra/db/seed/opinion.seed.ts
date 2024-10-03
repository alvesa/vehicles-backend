import { Opinion } from 'infra';
import { voteTypes } from './vote-type.seed';
import { vehicles } from './vehicle.seed';
import { users } from './user.seed';

const voteTypeOpinions = voteTypes.filter((item) => item.id <= '3');
const vehicle = vehicles.find((item) => item.id === '1');
const user = users[0];

export const opinions: Opinion[] = [
  {
    id: '1',
    title: 'opinion-1',
    negatives: 'negatives-1',
    positives: 'positives-1',
    problems: 'problems-1',
    general: 'general-1',
    vehicleId: vehicle.id,
    vehicle: vehicle,
    voteTypeOpinionIds: voteTypeOpinions.map((item) => item.id),
    voteTypeOpinion: voteTypeOpinions,
    userId: user.id,
    userOpinion: user,
  },
  {
    id: '2',
    title: 'Opinion 2',
    negatives: 'Negatives 2',
    positives: 'Positives 2',
    problems: 'Problems 2',
    general: 'General 2',
    vehicleId: vehicle.id,
    vehicle: vehicle,
    voteTypeOpinionIds: voteTypeOpinions.map((item) => item.id),
    voteTypeOpinion: voteTypeOpinions,
    userId: user.id,
    userOpinion: user,
  },
];

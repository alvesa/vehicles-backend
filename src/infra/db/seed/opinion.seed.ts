import { Opinion } from 'infra';
import { voteTypes } from './vote-type.seed';
import { vehicles } from './vehicle.seed';
import { users } from './user.seed';

const voteTypeOpinions = voteTypes.filter((item) => item.id <= '3');
const vehicle = vehicles.find((item) => item.id === '1');
const user = users.find((item) => item.id === '1');

export const opinions: Opinion[] = [
  {
    id: '1',
    title: 'Opinion 1',
    negatives: 'Negatives 1',
    positives: 'Positives 1',
    problems: 'Problems 1',
    general: 'General 1',
    vehicleId: vehicle.id,
    vehicle: vehicle,
    voteTypeOpinionId: voteTypeOpinions.map((item) => item.id),
    voteTypeOpinion: voteTypeOpinions,
    userOpinionId: user.id,
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
    voteTypeOpinionId: voteTypeOpinions.map((item) => item.id),
    voteTypeOpinion: voteTypeOpinions,
    userOpinionId: user.id,
    userOpinion: user,
  },
];

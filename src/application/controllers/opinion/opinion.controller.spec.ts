import { Test } from '@nestjs/testing';

import { VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';

import { OpinionController } from './opinion.controller';
import { OpinionRequest } from './dtos/opinion.request';

describe(OpinionController.name, () => {
  let controller: OpinionController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [OpinionController],
      exports: [],
    }).compile();

    controller = module.get<OpinionController>(OpinionController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return initial 2 on getAll registered by seed', () => {
    expect(controller.getAll()).toHaveLength(2);
  });

  it('should return throw NotFoundException', () => {
    try {
      controller.getById('opinion-not-found');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Opinion not found');
    }
  });

  it('should return first item', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({
        _id: '1',
        title: 'opinion-1',
        negatives: 'negatives-1',
        positives: 'positives-1',
        problems: 'problems-1',
        general: 'general-1',
        vehicleId: '1',
        voteTypeOpinionIds: ['1', '2', '3'],
        userId: expect.any(String),
      }),
    );
  });

  it('should return a new registered opinion', () => {
    const request = new OpinionRequest(
      'title1',
      'negatives1',
      'positives1',
      'problems1',
      'general1',
      '1',
      ['1'],
      '1',
    );
    const opinionId = controller.addOpinion(request);

    expect(controller.getById(opinionId).id).toBe(opinionId);
  });
});

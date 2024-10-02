import { Test } from '@nestjs/testing';

import { VehiclesDomainModule, VoteTypeDto } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { VoteTypeController } from './vote-type.controller';

describe(VoteTypeController.name, () => {
  let controller: VoteTypeController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [VoteTypeController],
      exports: [],
    }).compile();

    controller = module.get<VoteTypeController>(VoteTypeController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return initial 5 on getAll registered by seed', () => {
    expect(controller.getAll()).toHaveLength(5);
  });

  it('should throw NotFoundException', () => {
    try {
      controller.getById('voteType-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('VoteType not found');
    }
  });

  it('should return undefined ', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: '1',
        name: 'Votetype1',
        active: true,
      }),
    );
  });

  it('should return a new registered voteType', () => {
    const request = new VoteTypeDto('Test voteType');
    const voteTypeId = controller.addVoteType(request);

    expect(controller.getById(voteTypeId).id).toBe(voteTypeId);
  });
});

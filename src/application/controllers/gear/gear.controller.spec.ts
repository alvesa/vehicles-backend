import { Test } from '@nestjs/testing';

import { GearDto, VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { GearController } from './gear.controller';

describe(GearController.name, () => {
  let controller: GearController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [GearController],
      exports: [],
    }).compile();

    controller = module.get<GearController>(GearController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return initial 4 on getAll registered by seed', () => {
    expect(controller.getAll()).toHaveLength(4);
  });

  it('should return undefined gear', () => {
    try {
      controller.getById('gear-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Gear not found');
    }
  });

  it('should return undefined gear', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({ id: '1', name: 'manual', active: true }),
    );
  });

  it('should return a new registered gear', () => {
    const request = new GearDto('Test Gear');
    const gearId = controller.addGear(request);

    expect(controller.getById(gearId).id).toBe(gearId);
  });
});

import { Test } from '@nestjs/testing';

import { FuelDto, VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { FuelController } from './fuel.controller';

describe(FuelController.name, () => {
  let controller: FuelController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [FuelController],
      exports: [],
    }).compile();

    controller = module.get<FuelController>(FuelController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return initial 3 on getAll registered by seed', () => {
    expect(controller.getAll()).toHaveLength(3);
  });

  it('should return undefined fuel', () => {
    try {
      controller.getById('fuel-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Fuel not found');
    }
  });

  it('should return undefined fuel', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({ id: '1', name: 'gasoline', active: true }),
    );
  });

  it('should return a new registered fuel', () => {
    const request = new FuelDto('Test Fuel');
    const fuelId = controller.addFuel(request);

    expect(controller.getById(fuelId).id).toBe(fuelId);
  });
});

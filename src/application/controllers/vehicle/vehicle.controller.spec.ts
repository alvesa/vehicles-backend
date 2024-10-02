import { Test } from '@nestjs/testing';

import { VehicleDto, VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';

describe(VehicleController.name, () => {
  let controller: VehicleController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [VehicleController],
      exports: [],
    }).compile();

    controller = module.get<VehicleController>(VehicleController);
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

  it('should return throw NotFoundException', () => {
    try {
      controller.getById('vehicle-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Vehicle not found');
    }
  });

  it('should return first item', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({
        active: true,
        fuel: {
          active: true,
          id: '1',
          name: 'gasoline',
        },
      }),
    );
  });

  it('should return a new registered vehicle', () => {
    const request = new VehicleDto(
      'model1',
      'locality1',
      'version1',
      'fuel1',
      '2024',
      '10',
      '10kms',
      '120cv',
      'gear1',
      true,
    );
    const vehicleId = controller.addVehicle(request);

    expect(controller.getById(vehicleId).id).toBe(vehicleId);
  });
});

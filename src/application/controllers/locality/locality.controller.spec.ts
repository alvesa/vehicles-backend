import { Test } from '@nestjs/testing';

import { LocalityDto, VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { LocalityController } from './locality.controller';

describe(LocalityController.name, () => {
  let controller: LocalityController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [LocalityController],
      exports: [],
    }).compile();

    controller = module.get<LocalityController>(LocalityController);
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

  it('should return undefined locality', () => {
    try {
      controller.getById('locality-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Locality not found');
    }
  });

  it('should return undefined ', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: '1',
        name: 'locality1',
        countryId: '1',
        country: { name: 'country1', id: '1', active: true },
      }),
    );
  });

  it('should return a new registered locality', () => {
    const request = new LocalityDto('Test Locality', '1');
    const localityId = controller.addLocality(request);

    expect(controller.getById(localityId).id).toBe(localityId);
  });
});

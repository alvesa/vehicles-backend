import { Test } from '@nestjs/testing';

import { ModelDto, VehiclesDomainModule } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { ModelController } from './model.controller';

describe(ModelController.name, () => {
  let controller: ModelController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [ModelController],
      exports: [],
    }).compile();

    controller = module.get<ModelController>(ModelController);
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

  it('should return throw NotFoundException', () => {
    try {
      controller.getById('model-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Model not found');
    }
  });

  it('should return first item', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: '1',
        name: 'model1',
        brandId: '1',
        brand: {
          id: '1',
          name: 'brand1',
          active: true,
        },
      }),
    );
  });

  it('should return a new registered model', () => {
    const request = new ModelDto('Test model');
    const modelId = controller.addModel(request);

    expect(controller.getById(modelId).id).toBe(modelId);
  });
});

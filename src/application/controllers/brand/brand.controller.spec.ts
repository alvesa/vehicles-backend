import { Test } from '@nestjs/testing';
import { BrandController } from './brand.controller';
import { BrandDto, VehiclesDomainModule } from '../../../domain';

describe(BrandController.name, () => {
  let controller: BrandController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [BrandController],
      exports: [],
    }).compile();

    controller = module.get<BrandController>(BrandController);
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

  it('should return undefined brand', () => {
    const result = controller.getById('brand-undefined');

    expect(result).toBeUndefined();
  });

  it('should return undefined brand', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({ id: '1', name: 'brand1', active: true }),
    );
  });

  it('should return a new registered brand', () => {
    const request = new BrandDto('Test Brand');
    const brandId = controller.addBrand(request);

    expect(controller.getById(brandId).id).toBe(brandId);
  });

  it('should return an updated name brand', () => {
    const brand = controller.getById('1');

    controller.updateBrand({
      id: brand.id,
      name: 'newName',
    });

    expect(brand.name).toBe('newName');
  });
});

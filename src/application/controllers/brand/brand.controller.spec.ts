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

  it('should return no brand', () => {
    const result = controller.getById('brand-undefined');

    expect(result).toBeUndefined();
  });

  it('should return a new brand', () => {
    const request = new BrandDto('Test Brand');
    const newBrand = controller.addBrand(request);

    expect(controller.getById(newBrand).id).toBe(newBrand);
  });
});

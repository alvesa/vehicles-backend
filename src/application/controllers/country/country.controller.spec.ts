import { Test } from '@nestjs/testing';

import { VehiclesDomainModule, CountryDto } from '../../../domain';
import { CountryController } from './country.controller';
import { NotFoundException } from '@nestjs/common';

describe(CountryController.name, () => {
  let controller: CountryController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [CountryController],
      exports: [],
    }).compile();

    controller = module.get<CountryController>(CountryController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return initial 5 on getAll registered by seed', () => {
    expect(controller.getAllCountries()).toHaveLength(5);
  });

  it('should return undefined country', () => {
    try {
      controller.getById('country-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Country not found');
    }
  });

  it('should return undefined country', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({ id: '1', name: 'country1', active: true }),
    );
  });

  it('should return a new registered country', () => {
    const request = new CountryDto('Test Country');
    const countryId = controller.addCountry(request);

    expect(controller.getById(countryId).id).toBe(countryId);
  });
});

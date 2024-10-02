import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { BaseService, CountryDto } from '../../../domain';
import { Country } from '../../../infra';

interface CountryRequest {
  name: string;
}

export interface CountryResponse {
  id: string;
  name: string;
  active: boolean;
}

@Controller('country')
export class CountryController {
  constructor(
    @Inject('COUNTRY_SERVICE')
    private readonly countryService: BaseService<CountryDto, CountryResponse>,
  ) {}

  @Get()
  getAllCountries(): CountryResponse[] {
    return this.countryService.getAll();
  }

  @Get(':id')
  getById(@Param('id') countryId: string): CountryResponse {
    const country = this.countryService.getById(countryId);

    return {
      id: country.id,
      name: country.name,
      active: country.active,
    };
  }

  @Post('')
  addCountry(@Body() { name }: CountryRequest): string {
    return this.countryService.add(new Country(name, true));
  }
}

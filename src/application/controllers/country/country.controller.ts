import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BaseService } from '../../../domain';
import { Country } from 'infra';

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
  constructor(private readonly countryService: BaseService<Country>) {}

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
  addCountry(@Body() { name }: CountryRequest): void {
    this.countryService.add(new Country(name, true));
  }
}

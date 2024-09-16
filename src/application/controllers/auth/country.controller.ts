import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CountryService } from '../../../domain/country.service';

interface CountryRequest {
  name: string;
}

interface CountryResponse {
  id: string;
  name: string;
  active: boolean;
}

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  getAllCountries(): CountryResponse[] {
    return this.countryService.getAllCountries();
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
    this.countryService.addCountry(name);
  }
}

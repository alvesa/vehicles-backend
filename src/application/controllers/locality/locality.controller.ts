import { Body, Controller, Get, Post } from '@nestjs/common';
import { LocalityService } from '../../../domain';
import { CountryResponse } from 'application';

export interface LocalityRequest {
  name: string;
  countryId: string;
}

interface LocalityResponse {
  name: string;
  country: CountryResponse;
}

@Controller('locality')
export class LocalityController {
  constructor(private readonly localityService: LocalityService) {}

  @Get()
  getAll(): LocalityResponse[] {
    return this.localityService.getAll();
  }

  @Post()
  addLocality(@Body() request: LocalityRequest): void {
    this.localityService.addLocality(request);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { BaseService } from '../../../domain';
import { CountryResponse } from 'application';
import { Locality } from 'infra';

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
  constructor(private readonly localityService: BaseService<Locality>) {}

  @Get()
  getAll(): LocalityResponse[] {
    return this.localityService.getAll();
  }

  @Post()
  addLocality(@Body() request: Locality): void {
    this.localityService.add(request);
  }
}

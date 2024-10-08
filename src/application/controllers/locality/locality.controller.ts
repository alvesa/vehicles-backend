import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { BaseService } from '../../../domain';
import { CountryResponse } from '../../../application';
import { Locality } from '../../../infra';
import { LocalityDto } from 'domain/dtos/locality.dto';

export interface LocalityRequest {
  name: string;
  countryId: string;
}

export interface LocalityResponse {
  id: string;
  name: string;
  country: CountryResponse;
}

@Controller('locality')
export class LocalityController {
  constructor(
    @Inject('LOCALITY_SERVICE')
    private readonly localityService: BaseService<
      LocalityDto,
      LocalityResponse
    >,
  ) {}

  @Get()
  getAll(): LocalityResponse[] {
    return this.localityService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): LocalityResponse {
    const locality = this.localityService.getById(id);

    if (!locality) {
      throw new NotFoundException('Locality not found');
    }

    return locality;
  }

  @Post()
  addLocality(@Body() request: Locality): string {
    return this.localityService.add(request);
  }
}

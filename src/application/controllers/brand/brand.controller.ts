import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseService } from '../../../domain';
import { Brand } from '../../../infra';

export interface BrandRequest {
  name: string;
}

export interface BrandUpdateRequest {
  id: string;
  name: string;
}

interface BrandResponse {
  id: string;
  name: string;
  active: boolean;
}

@Controller('brand')
export class BrandController {
  constructor(
    @Inject('BRAND_SERVICE')
    private readonly brandService: BaseService<Brand>,
  ) {}

  @Get()
  getAll(): BrandResponse[] {
    return this.brandService.getAll();
  }

  @Get(':id')
  getById(@Param('id') brandId: string): BrandResponse {
    return this.brandService.getById(brandId);
  }

  @Post()
  addBrand(@Body() request: Brand): void {
    this.brandService.add(request);
  }

  @Patch()
  updateBrand(@Body() request: BrandUpdateRequest): void {
    const brand = this.brandService.getById(request.id);

    brand.name = request.name;

    this.brandService.update(brand);
  }
}

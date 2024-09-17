import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BrandService } from 'domain/brand.service';

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
  constructor(private readonly brandService: BrandService) {}

  @Get()
  getAll(): BrandResponse[] {
    return this.brandService.getAll();
  }

  @Get(':id')
  getById(@Param('id') brandId: string): BrandResponse {
    return this.brandService.getById(brandId);
  }

  @Post()
  addBrand(@Body() request: BrandRequest): void {
    this.brandService.addBrand(request);
  }

  @Patch()
  updateBrand(@Body() request: BrandUpdateRequest): void {
    const brand = this.brandService.getById(request.id);

    brand.name = request.name;

    this.brandService.update(brand);
  }
}

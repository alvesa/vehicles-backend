import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseService, BrandDto } from '../../../domain';
import { BrandResponse } from './dtos/brand.response';
import { BrandRequest, BrandUpdateRequest } from './dtos/brand.request';

@Controller('brand')
export class BrandController {
  constructor(
    @Inject('BRAND_SERVICE')
    private readonly brandService: BaseService<BrandDto, BrandResponse>,
  ) {}

  @Get()
  getAll(): BrandResponse[] {
    const brands = this.brandService.getAll();

    return brands.map((brand) => ({
      id: brand.id,
      name: brand.name,
      active: brand.active,
    }));
  }

  @Get(':id')
  getById(@Param('id') brandId: string): BrandResponse {
    return this.brandService.getById(brandId);
  }

  @Post()
  addBrand(@Body() request: BrandRequest): string {
    return this.brandService.add(new BrandDto(request.name));
  }

  @Patch()
  updateBrand(@Body() request: BrandUpdateRequest): void {
    const brand = this.brandService.getById(request.id);

    brand.name = request.name;

    this.brandService.update(brand);
  }
}

import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BrandDto, BrandService } from '../../../domain';
import { BrandRequest, BrandUpdateRequest } from './dtos/brand.request';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async getAll(): Promise<any[]> {
    const brands = await this.brandService.getAll();

    return brands.map((brand) => ({
      id: brand.id,
      name: brand.name,
      active: brand.active,
    }));
  }

  @Get(':id')
  async getById(@Param('id') brandId: string): Promise<any> {
    return await this.brandService.getById(brandId);
  }

  @Post()
  async addBrand(@Body() request: BrandRequest): Promise<string> {
    return await this.brandService.add(new BrandDto(request.name));
  }

  @Patch()
  async updateBrand(@Body() request: BrandUpdateRequest): Promise<void> {
    const brand = await this.brandService.getById(request.id);

    brand.name = request.name;

    await this.brandService.update(brand);
  }
}

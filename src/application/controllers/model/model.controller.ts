import { Controller, Get, Param } from '@nestjs/common';
// TODO: verify service imports
import { BaseService } from '../../../domain';
import { Model } from 'infra';

interface ModelResponse {
  id: string;
  name: string;
  brandId: string;
  brand: {
    id: string;
    name: string;
  };
}

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: BaseService<Model>) {}

  @Get()
  getAll(): ModelResponse[] {
    return this.modelService.getAll();
  }

  @Get('id')
  getById(@Param('id') id: string): ModelResponse {
    return this.modelService.getById(id);
  }
}

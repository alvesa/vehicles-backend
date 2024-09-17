import { Controller, Get, Param } from '@nestjs/common';
// TODO: verify service imports
import { ModelService } from '../../../domain';

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
  constructor(private readonly modelService: ModelService) {}

  @Get()
  getAll(): ModelResponse[] {
    return this.modelService.getAll();
  }

  @Get('id')
  getById(@Param('id') id: string): ModelResponse {
    return this.modelService.getById(id);
  }
}

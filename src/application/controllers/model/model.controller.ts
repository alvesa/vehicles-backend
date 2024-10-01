import { Controller, Get, Inject, Param } from '@nestjs/common';
// TODO: verify service imports
import { BaseService, ModelDto } from '../../../domain';

export interface ModelResponse {
  name: string;
}

@Controller('model')
export class ModelController {
  constructor(
    @Inject('MODEL_SERVICE')
    private readonly modelService: BaseService<ModelDto, ModelResponse>,
  ) {}

  @Get()
  getAll(): ModelResponse[] {
    return this.modelService.getAll();
  }

  @Get('id')
  getById(@Param('id') id: string): ModelResponse {
    return this.modelService.getById(id);
  }
}

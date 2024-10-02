import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
// TODO: verify service imports
import { BaseService, ModelDto } from '../../../domain';

export interface ModelResponse {
  id: string;
  name: string;
}

export interface ModelRequest {
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

  @Post()
  addModel(@Body() request: ModelRequest): string {
    return this.modelService.add(new ModelDto(request.name));
  }
}

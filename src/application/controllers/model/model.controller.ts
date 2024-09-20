import { Controller, Get, Inject, Param } from '@nestjs/common';
// TODO: verify service imports
import { BaseService } from '../../../domain';
import { Model } from 'infra';

@Controller('model')
export class ModelController {
  constructor(
    @Inject('MODEL_SERVICE')
    private readonly modelService: BaseService<Model>,
  ) {}

  @Get()
  getAll(): Model[] {
    return this.modelService.getAll();
  }

  @Get('id')
  getById(@Param('id') id: string): Model {
    return this.modelService.getById(id);
  }
}

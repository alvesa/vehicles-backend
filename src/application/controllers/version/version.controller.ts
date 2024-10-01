import { Controller, Get, Inject, Param } from '@nestjs/common';
import { VersionDto } from '../../../domain';
import { BaseService } from 'domain/services/base.service';

export interface VersionResponse {
  id: string;
}

@Controller('version')
export class VersionController {
  constructor(
    @Inject('VERSION_SERVICE')
    private readonly versionService: BaseService<VersionDto, VersionResponse>,
  ) {}

  @Get()
  getAll(): VersionResponse[] {
    return this.versionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): VersionResponse {
    return this.versionService.getById(id);
  }
}

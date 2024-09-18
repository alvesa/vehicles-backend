import { Controller, Get, Param } from '@nestjs/common';
import { BaseService } from 'domain/base.service';
import { Version } from 'infra';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: BaseService<Version>) {}

  @Get()
  getAll(): Version[] {
    return this.versionService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Version {
    return this.versionService.getById(id);
  }
}

import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { VersionDto, BaseService } from '../../../domain';

export interface VersionResponse {
  id: string;
}

export interface VersionRequest {
  version: string;
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

  @Post()
  addVersion(@Body() request: VersionRequest): string {
    return this.versionService.add(new VersionDto(request.version));
  }
}

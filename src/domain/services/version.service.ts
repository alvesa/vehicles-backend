import { VersionResponse } from 'application';
import { DatasetRepository, Version } from '../../infra';
import { BaseService } from './base.service';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { VersionDto } from '../../domain';

@Injectable()
export class VersionService extends BaseService<VersionDto, VersionResponse> {
  constructor(
    @Inject('VERSION_REPOSITORY')
    private readonly ds: DatasetRepository<Version>,
  ) {
    super();
  }
  getAll(): Version[] {
    return this.ds.getAll();
  }
  getById(id: string): Version {
    const version = this.ds.getById(id);

    if (!version) {
      throw new NotFoundException('Version not found');
    }

    return version;
  }
  add(entity: VersionDto): string {
    return this.ds.save(new Version(entity.version));
  }
  update(entity: Version): void {
    this.ds.update(entity);
  }
  delete(id: string): void {
    this.ds.delete(id);
  }
}

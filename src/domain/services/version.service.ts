import { VersionResponse } from 'application';
import { MockDataset, Version } from '../../infra';
import { BaseService } from './base.service';
import { Injectable } from '@nestjs/common';

export interface VersionDto {
  id: string;
}

@Injectable()
export class VersionService extends BaseService<VersionDto, VersionResponse> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): Version[] {
    return this.mockDb.versions.getAll();
  }
  getById(id: string): Version {
    return this.mockDb.versions.getById(id);
  }
  add(entity: Version): string {
    return this.mockDb.versions.save(entity);
  }
  update(entity: Version): void {
    this.mockDb.versions.update(entity);
  }
  delete(id: string): void {
    this.mockDb.versions.delete(id);
  }
}

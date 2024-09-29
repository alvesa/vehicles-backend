import { MockDataset, Version } from '../../infra';
import { BaseService } from './base.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VersionService extends BaseService<Version> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): Version[] {
    return this.mockDb.versions.getAll();
  }
  getById(id: string): Version {
    return this.mockDb.versions.getById(id);
  }
  add(entity: Version): void {
    this.mockDb.versions.save(entity);
  }
  update(entity: Version): void {
    this.mockDb.versions.update(entity);
  }
  delete(id: string): void {
    this.mockDb.versions.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { DatasetRepository } from '../dataset.repository';
import { MockDataset, Version } from 'infra';

@Injectable()
export class VersionRepository implements DatasetRepository<Version> {
  constructor(private readonly mockDb: MockDataset) {}
  getAll(): Version[] {
    return this.mockDb.versions.getAll();
  }
  getById(id: string): Version {
    return this.mockDb.versions.getById(id);
  }
  save(entity: Version): string {
    return this.mockDb.versions.save(entity);
  }
  update(id: string, entity: Version): void {
    this.mockDb.versions.update(entity);
  }
  delete(id: string): void {
    this.mockDb.versions.delete(id);
  }
}

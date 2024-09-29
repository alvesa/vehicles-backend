import { Inject } from '@nestjs/common';
import { DatasetRepository, Gear } from '../../infra';
import { BaseService } from './base.service';

export class GearService extends BaseService<Gear> {
  constructor(
    @Inject('GEAR_REPOSITORY') private readonly ds: DatasetRepository<Gear>,
  ) {
    super();
  }
  getAll(): Gear[] {
    return this.ds.getAll();
  }
  getById(id: string): Gear {
    return this.ds.getById(id);
  }
  add(entity: Gear): void {
    this.ds.save(entity);
  }
  update(entity: Gear): void {
    this.ds.update(entity.id, entity);
  }
  delete(id: string): void {
    this.ds.delete(id);
  }
}

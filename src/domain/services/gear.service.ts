import { Inject } from '@nestjs/common';
import { DatasetRepository, Gear } from '../../infra';
import { BaseService } from './base.service';
import { GearResponse } from '../../application';

export class GearDto {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class GearService extends BaseService<GearDto, GearResponse> {
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
  add(entity: GearDto): string {
    return this.ds.save(new Gear(entity.name, true));
  }
  update(entity: Gear): void {
    this.ds.update(entity);
  }
  delete(id: string): void {
    this.ds.delete(id);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatasetRepository, Fuel } from 'infra';
import { BaseService } from './base.service';

export class FuelDto {
  id: string;
  name: string;
  active: boolean;

  constructor(name: string, active: boolean = true) {
    this.id = randomUUID();
    this.name = name;
    this.active = active;
  }
}

@Injectable()
export class FuelService extends BaseService<Fuel> {
  constructor(
    @Inject('FUEL_REPOSITORY')
    private readonly fuelRepository: DatasetRepository<Fuel>,
  ) {
    super();
  }

  getAll(): FuelDto[] {
    return this.fuelRepository.getAll();
  }

  getById(id: string): FuelDto {
    return this.fuelRepository.getById(id);
  }

  add(entity: Fuel): void {
    this.fuelRepository.save(new Fuel(entity.name, entity.active));
  }
  update(entity: Fuel): void {
    this.fuelRepository.update(new Fuel(entity.name, entity.active));
  }
  delete(id: string): void {
    this.fuelRepository.delete(id);
  }
}

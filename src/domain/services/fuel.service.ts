import { Inject, Injectable } from '@nestjs/common';
import { DatasetRepository, Fuel } from '../../infra';
import { BaseService } from './base.service';
import { FuelResponse } from '../../application';

export interface FuelDto {
  name: string;
}

@Injectable()
export class FuelService extends BaseService<FuelDto, FuelResponse> {
  constructor(
    @Inject('FUEL_REPOSITORY')
    private readonly fuelRepository: DatasetRepository<Fuel>,
  ) {
    super();
  }

  getAll(): Fuel[] {
    return this.fuelRepository.getAll();
  }

  getById(id: string): Fuel {
    return this.fuelRepository.getById(id);
  }

  add(entity: FuelDto): string {
    return this.fuelRepository.save(new Fuel(entity.name));
  }
  update(entity: Fuel): void {
    this.fuelRepository.update(new Fuel(entity.name, entity.active));
  }
  delete(id: string): void {
    this.fuelRepository.delete(id);
  }
}

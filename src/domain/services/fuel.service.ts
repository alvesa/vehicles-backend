import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DatasetRepository, Fuel } from 'infra';

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
export class FuelService {
  constructor(
    @Inject('FUEL_REPOSITORY')
    private readonly fuelRepository: DatasetRepository<Fuel>,
  ) {}

  getAll(): FuelDto[] {
    return this.fuelRepository.getAll();
  }

  getById(id: string): FuelDto {
    return this.fuelRepository.getById(id);
  }

  addFuel(entity: FuelDto): void {
    this.fuelRepository.save(new Fuel(entity.name, entity.active));
  }
}

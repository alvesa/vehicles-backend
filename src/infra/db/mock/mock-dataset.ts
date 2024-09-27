import { localities } from '../seed/locality.seed';
import { countries } from '../seed/country.seed';
import { Injectable } from '@nestjs/common';
import { brands } from '../seed/brand.seed';
import { models } from '../seed/model.seed';
import { voteTypes } from '../seed/vote-type.seed';
import { fuels } from '../seed/fuel.seed';
import { versions } from '../seed/version.seed';
import { opinions } from '../seed/opinion.seed';
import { vehicles } from '../seed/vehicle.seed';
import { gears } from '../seed/gear.seed';
import {
  Brand,
  Country,
  Fuel,
  Gear,
  Locality,
  Model,
  Opinion,
  User,
  Vehicle,
  Version,
  VoteType,
} from '../../../infra';

@Injectable()
export class MockDataset {
  private static readonly _users: User[] = [];
  public readonly user = {
    getAll(): User[] {
      const users = MockDataset._users;

      return users;
    },
    getById(id: string): User {
      const result = MockDataset._users.find((user) => user.id === id);

      return result;
    },
    save(entity: User): string {
      MockDataset._users.push(entity);
      return entity.id;
    },
    update(id: string, entity: User): void {
      const user = this.getById(id);

      user.email = entity.email;
      user.firstName = entity.firstName;
      user.lastName = entity.lastName;
      user.locality = entity.locality;
      user.localityId = entity.localityId;
      user.password = entity.password;
    },
    delete(id: string): void {
      const user = this.getById(id);
      const index = MockDataset._users.indexOf(user);

      MockDataset._users.splice(index, 1);
    },
    getByEmail(email: string): User {
      return MockDataset._users.find((user) => user.email === email);
    },

    cleanup(): void {
      MockDataset._users.length = 0;
    },
  };

  private static readonly _countries: Country[] = [...countries];
  public readonly country = {
    getAll(): Country[] {
      return MockDataset._countries;
    },
    getById(id: string): Country {
      return MockDataset._countries.find((country) => country.id === id);
    },
    save(entity: Country): string {
      MockDataset._countries.push(entity);
      return entity.id;
    },
    update(entity: Country): void {
      const country = this.getById(entity.id);

      country.active = entity.active;
      country.name = entity.name;
    },
    delete(id: string): void {
      const country = this.getById(id);
      const index = MockDataset._countries.indexOf(country);

      MockDataset._countries.splice(index, 1);
    },
  };

  private static readonly _localities: Locality[] = [...localities];
  public readonly locality = {
    getAll(): Locality[] {
      return MockDataset._localities;
    },
    getById(id: string): Locality {
      return MockDataset._localities.find((locality) => locality.id === id);
    },
    save(entity: Locality): string {
      MockDataset._localities.push(entity);
      return entity.id;
    },
    update(entity: Locality): void {
      const locality = this.getById(entity.id);

      locality.country = entity.country;
      locality.name = entity.name;
    },
    delete(id: string): void {
      const locality = this.getById(id);
      const index = MockDataset._localities.indexOf(locality);

      MockDataset._localities.splice(index, 1);
    },
  };

  private static readonly _brands: Brand[] = [...brands];
  public readonly brands = {
    getAll(): Brand[] {
      return MockDataset._brands;
    },
    getById(id: string): Brand {
      return MockDataset._brands.find((brand) => brand.id === id);
    },
    save(entity: Brand): string {
      MockDataset._brands.push(entity);
      return entity.id;
    },
    update(entity: Brand): void {
      const brand = this.getById(entity.id);

      brand.name = entity.name;
      brand.active = entity.active;
    },
    delete(id: string): void {
      const brand = this.getById(id);
      const index = MockDataset._brands.indexOf(brand);

      MockDataset._brands.splice(index, 1);
    },
  };

  private static readonly _models: Model[] = [...models];
  public readonly models = {
    getAll(): Model[] {
      return MockDataset._models;
    },
    getById(id: string): Model {
      return MockDataset._models.find((brand) => brand.id === id);
    },
    save(entity: Model): string {
      MockDataset._models.push(entity);
      return entity.id;
    },
    update(entity: Model): void {
      const model = this.getById(entity.id);

      model.name = entity.name;
      model.brandId = entity.brandId;
      model.brand = entity.brand;
    },
    delete(id: string): void {
      const model = this.getById(id);
      const index = MockDataset._models.indexOf(model);

      MockDataset._models.splice(index, 1);
    },
  };

  private static readonly _voteTypes: VoteType[] = [...voteTypes];
  public readonly voteTypes = {
    getAll(): VoteType[] {
      return MockDataset._voteTypes;
    },
    getById(id: string): VoteType {
      return MockDataset._voteTypes.find((item) => item.id === id);
    },
    save(entity: VoteType): string {
      MockDataset._voteTypes.push(entity);
      return entity.id;
    },
    update(entity: VoteType): void {
      const result = this.getById(entity.id);

      result.name = entity.name;
      result.active = entity.active;
    },
    delete(id: string): void {
      const result = this.getById(id);
      const index = MockDataset._voteTypes.indexOf(result);

      MockDataset._voteTypes.splice(index, 1);
    },
  };

  private static readonly _fuels: Fuel[] = [...fuels];
  public readonly fuels = {
    getAll(): Fuel[] {
      return MockDataset._fuels;
    },
    getById(id: string): Fuel {
      return MockDataset._fuels.find((item) => item.id === id);
    },
    save(entity: Fuel): string {
      MockDataset._fuels.push(entity);
      return entity.id;
    },
    update(entity: Fuel): void {
      const result = this.getById(entity.id);

      result.name = entity.name;
      result.active = entity.active;
    },
    delete(id: string): void {
      const result = this.getById(id);
      const index = MockDataset._fuels.indexOf(result);

      MockDataset._fuels.splice(index, 1);
    },
  };

  private static readonly _versions: Version[] = [...versions];
  public readonly versions = {
    getAll(): Version[] {
      return MockDataset._versions;
    },
    getById(id: string): Version {
      return MockDataset._versions.find((item) => item.id === id);
    },
    save(entity: Version): string {
      MockDataset._versions.push(entity);
      return entity.id;
    },
    update(entity: Version): void {
      const result = this.getById(entity.id);

      result.version = entity.version;
    },
    delete(id: string): void {
      const result = this.getById(id);
      const index = MockDataset._versions.indexOf(result);

      MockDataset._versions.splice(index, 1);
    },
  };

  private static readonly _opinions: Opinion[] = [...opinions];
  public readonly opinions = {
    getAll(): Opinion[] {
      return MockDataset._opinions;
    },
    getById(id: string): Opinion {
      return MockDataset._opinions.find((item) => item.id === id);
    },
    save(entity: Opinion): string {
      MockDataset._opinions.push(entity);
      return entity.id;
    },
    update(entity: Opinion): void {
      const result = this.getById(entity.id);

      result.title = entity.title;
      result.negatives = entity.negatives;
      result.positives = entity.positives;
      result.problems = entity.problems;
      result.general = entity.general;
      result.vehicleId = entity.vehicleId;
      result.voteTypeOpinionId = entity.voteTypeOpinionId;
      result.userOpinionId = entity.userOpinionId;
    },
    delete(id: string): void {
      const result = this.getById(id);
      const index = MockDataset._opinions.indexOf(result);

      MockDataset._opinions.splice(index, 1);
    },
  };

  private static readonly _vehicles: Vehicle[] = [...vehicles];
  public readonly vehicles = {
    getAll(): Vehicle[] {
      return MockDataset._vehicles;
    },
    getById(id: string): Vehicle {
      return MockDataset._vehicles.find((item) => item.id === id);
    },
    save(entity: Vehicle): string {
      MockDataset._vehicles.push(entity);
      return entity.id;
    },
    update(entity: Vehicle): void {
      const result = this.getById(entity.id);

      result.modelId = entity.modelId;
      result.localityId = entity.localityId;
      result.versionId = entity.versionId;
      result.fuelId = entity.fuelId;
      result.year = entity.year;
      result.month = entity.month;
      result.kms = entity.kms;
      result.hp = entity.hp;
      result.active = entity.active;
    },
    delete(id: string): void {
      const result = this.getById(id);
      const index = MockDataset._vehicles.indexOf(result);

      MockDataset._vehicles.splice(index, 1);
    },
  };

  private static readonly _gears: Gear[] = [...gears];
  public readonly gears = {
    getAll(): Gear[] {
      return MockDataset._gears;
    },
    getById(id: string): Gear {
      return MockDataset._gears.find((item) => item.id === id);
    },
    save(entity: Gear): string {
      MockDataset._gears.push(entity);
      return entity.id;
    },
    update(entity: Gear): void {
      const result = this.getById(entity.id);

      result.name = entity.name;
      result.active = entity.active;
    },
    delete(id: string): void {
      const result = this.getById(id);
      const index = MockDataset._gears.indexOf(result);

      MockDataset._gears.splice(index, 1);
    },
  };
}

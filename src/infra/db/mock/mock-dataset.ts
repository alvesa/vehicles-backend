import { localities } from '../seed/locality.seed';
import { countries } from '../seed/country.seed';
import { Injectable } from '@nestjs/common';
import { brands } from '../seed/brand.seed';
import { models } from '../seed/model.seed';
import { Brand, Country, Locality, Model, User } from 'infra';

// import { BaseDataset } from '../dataset-base';

@Injectable()
export class MockDataset {
  private static readonly _users: User[] = [];
  public readonly user = {
    getAll(): User[] {
      return MockDataset._users;
    },
    getById(id: string): User {
      return MockDataset._users.find((user) => user.id === id);
    },
    save(entity: User): void {
      MockDataset._users.push(entity);
    },
    update(entity: User): void {
      const user = this.getById(entity.id);

      user.email = entity.email;
      user.firstName = entity.firstName;
      user.lastName = entity.lastName;
      user.locality = entity.locality;
      user.password = entity.password;
    },
    delete(id: string): void {
      const user = this.getById(id);
      const index = super._users.indexOf(user);

      super._users.splice(index, 1);
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
    save(entity: Country): void {
      MockDataset._countries.push(entity);
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
    save(entity: Locality): void {
      MockDataset._localities.push(entity);
    },
    update(entity: Locality): void {
      const locality = this.getById(entity.id);

      locality.country = entity.country;
      locality.name = entity.name;
    },
    delete(id: string): void {
      const locality = this.getById(id);
      const index = super._localities.indexOf(locality);

      super._localities.splice(index, 1);
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
    save(entity: Brand): void {
      MockDataset._brands.push(entity);
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
    save(entity: Model): void {
      MockDataset._models.push(entity);
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
}

import { User } from '../../entities/user.entity';
import { Locality } from '../../entities/locality.entity';
import { localities } from '../seed/locality.seed';
import { Country } from '../../entities/country.entity';
import { countries } from '../seed/country.seed';
import { Injectable } from '@nestjs/common';

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
}

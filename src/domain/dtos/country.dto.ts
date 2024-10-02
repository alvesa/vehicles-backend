import { randomUUID } from 'crypto';

export class CountryDto {
  id: string;
  name: string;
  active: boolean;

  constructor(name: string, active: boolean = true) {
    this.id = randomUUID();
    this.name = name;
    this.active = active;
  }
}

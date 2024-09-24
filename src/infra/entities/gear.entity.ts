import { randomUUID } from 'crypto';

export class Gear {
  id: string;
  name: string;
  active: boolean;

  constructor(name: string, active: boolean) {
    this.id = randomUUID();
    this.name = name;
    this.active = active;
  }
}

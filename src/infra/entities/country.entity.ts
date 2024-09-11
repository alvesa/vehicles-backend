import { EntityType } from './user.entity';

export class Country extends EntityType {
  id: string;
  name: string;
  active: boolean;

  constructor(id: string, name: string, active: boolean) {
    super();

    this.id = id;
    this.name = name;
    this.active = active;
  }
}

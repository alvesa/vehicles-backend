import { randomUUID } from 'crypto';

export class Version {
  id: string;
  version: string;

  constructor(version: string) {
    this.id = randomUUID();
    this.version = version;
  }
}

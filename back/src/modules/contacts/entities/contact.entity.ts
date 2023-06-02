/* eslint-disable prettier/prettier */
import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  telephone: string;
  user_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}

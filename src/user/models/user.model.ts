// import {uuid} from '@loopback/core';
import {Entity, model, property} from '@loopback/repository';
@model({name: 'users', settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  user_id?: number;

  @property({
    type: 'string',
  })
  firstname?: string;

  @property({
    type: 'string',
  })
  lastname: string;

  @property({
    type: 'string',
  })
  email: string;

  @property({
    type: 'boolean',
    default: 'Y',
  })
  active?: boolean;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'object',
  })
  properties?: object;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

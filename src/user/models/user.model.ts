import {Entity, model, property} from '@loopback/repository';
import {uuid} from '@loopback/core';

@model({name: 'users', settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    useDefaultIdType: false,
    default: () => uuid(),
    postgresql: {
      dataType: 'uuid'
    }
  })
  user_id?: string;

  @property({
    type: 'string'
  })
  firstname?: string;

  @property({
    type: 'string'
  })
  lastname: string;

  @property({
    type: 'string'
  })
  email: string;

  @property({
    type: 'boolean',
    default: 'Y'
  })
  active?: boolean;

  @property({
    type: 'string'
  })
  password?: string;

  @property({
    type: 'object'
  })
  properties?: object;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

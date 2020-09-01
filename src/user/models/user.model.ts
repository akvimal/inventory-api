// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { Role } from '../../role/models';
import { UserRole } from './userrole.model';
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

  @hasMany(() => Role, {through: {model: () => UserRole}})
  roles: Role[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

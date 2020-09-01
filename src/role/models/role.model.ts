// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { UserRole } from '../../user/models/userrole.model';
import { User } from '../../user/models';

@model({name: 'roles', settings: {strict: false}})
export class Role extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  role_id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'object',
  })
  permissions?: object;

  @hasMany(() => Role, {through: {model: () => UserRole}})
  users: User[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

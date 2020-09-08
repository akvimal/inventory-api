// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import { UserRole } from '../../user/models/userRole.model ';
import { User } from '../../user/models';

@model({name: 'roles',
//  settings: {strict: false}
})
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

  // @belongsTo(() => Role)
  // role_id: number;

  @hasMany(() => Role,{keyTo:'role_id'})
  user_roles: UserRole[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}
export interface UserRelations {
  // describe navigational properties here
  user?: UserWithRelations;
}
export type UserWithRelations = User & UserRelations;

// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { UserRole } from './userRole.model ';


@model({name: 'users', 
// settings:{strict: false}

// "relations": {
//   "users": {
//     "type":"belongsTo",
//     "model": "users",
//     "foreignKey": "user_id",
//     "primaryKey": "user_id"
//   }
// },

// "foreignKeys": {
//   "user_id": {
//     "name": "user_id_too_users",
//     "foreignKey": "user_id",
//     "entityKey": "id",
//     "entity": "user_roles"
//   }
// }
// }
})
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

  @hasMany(() => UserRole, {keyTo:'user_id'})
  user_roles: UserRole[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

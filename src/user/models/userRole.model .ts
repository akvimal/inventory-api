import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import { User } from './user.model';
import { Role } from '../../role/models';


@model({name: 'user_roles', 
// settings: {strict: false}
})
export class UserRole extends Entity {
  
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  role_id?: number;
  @property({
    type: 'number',
  })
  // @belongsTo(() => User)
  user_id?: number;

   @hasMany(() => Role, {through: {model: () => UserRole}})
  users: User[];
  User_roles:UserRole[];

  constructor(data?: Partial<UserRole>) {
    super(data);
  }
  
}

export interface UserRoleRelations {
  customer?: UserRoleWithRelations;
}

export type UserRoleWithRelations = UserRole & UserRoleRelations;
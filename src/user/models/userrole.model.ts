// import {uuid} from '@loopback/core';
import {Entity, model, property} from '@loopback/repository';

@model({name: 'user_roles', settings: {strict: false}})
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
  userId?: number;
  
  @property({
    type: 'number',
  })
  roleId?: number;

  constructor(data?: Partial<UserRole>) {
    super(data);
  }
}

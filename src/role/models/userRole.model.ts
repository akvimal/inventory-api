// import {uuid} from '@loopback/core';
import {Entity, model, property} from '@loopback/repository';



@model({name: 'user_roles', settings: {strict: false}})
export class Userrole extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  UserId?: number;

  @property({
    type: 'number',
  })
  RoleId?:number;

  // @hasMany(() =>Role ,{through: {model: () => Userrole}})
  // roles:Role[]; 
  
  constructor(data?: Partial<Userrole>) {
    super(data);
  }
}

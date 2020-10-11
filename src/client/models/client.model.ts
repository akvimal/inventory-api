// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { ClientLocation } from './clientLocation.model ';

@model({name: 'clients'})
export class Client extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'boolean',
    default: 'Y',
  })
  active?: boolean;

 @property({
  type: 'string',
})
type?: string;

 @property({
  type: 'string',
})
name?: string;


  @hasMany(() => Client, {keyTo:'client_id'})
  client_locations: ClientLocation[];

  constructor(data?: Partial<Client>) {
    super(data);
  }
}

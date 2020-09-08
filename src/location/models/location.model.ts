// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';

@model({name: 'locations'})
export class Location extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'boolean',
    default: 'Y',
  })
  active?: boolean;
  

  @hasMany(() => Location, {keyTo:'location_id'})
  client_locations: Location[];

  constructor(data?: Partial<Location>) {
    super(data);
  }
}

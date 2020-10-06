import {Entity, model, property, hasMany} from '@loopback/repository';
import { Client } from './client.model';
import { Location } from '../../location/models/location.model';

@model({name: 'client_locations', 
// settings: {strict: false}
})
export class ClientLocation extends Entity {
  
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;
  @property({
    type: 'string',
  })
  device_name?: string;

  @property({
    type: 'number',
  })
  location_id?: number;
  @property({
    type: 'number',
  })
  client_id?: number;

   @hasMany(() => Client, {through: {model: () => ClientLocation}})
  clients: Client[];
  locations:Location[];


  constructor(data?: Partial<ClientLocation>) {
    super(data);
  }
  
}

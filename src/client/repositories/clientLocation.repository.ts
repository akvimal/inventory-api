import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';

import { ClientLocation } from '../models/clientLocation.model ';


export class ClientLocationRepository extends DefaultCrudRepository<
ClientLocation,
  typeof ClientLocation.prototype.client_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(ClientLocation, dataSource);
  }
}

import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import { Location } from '../models/location.model';


export class LocationRepository extends DefaultCrudRepository<
Location,
  typeof Location.prototype.id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(Location, dataSource);
  }
}

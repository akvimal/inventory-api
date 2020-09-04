import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import {Reference} from '../models';

export class ReferenceRepository extends DefaultCrudRepository<
  Reference,
  typeof Reference.prototype.reference_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(Reference, dataSource);
  }
}

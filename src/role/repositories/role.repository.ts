import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import {Role} from '../models';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.role_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(Role, dataSource);
  }
}

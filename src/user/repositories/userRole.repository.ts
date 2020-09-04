import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../datasources';
import { UserRole } from '../models/userRole.model ';


export class UserRoleRepository extends DefaultCrudRepository<
  UserRole,
  typeof UserRole.prototype.user_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(UserRole, dataSource);
  }
}

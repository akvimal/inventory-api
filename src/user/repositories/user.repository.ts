import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';

import {User, UserRelations} from '../models';
import { InventorydbDataSource } from '../datasources';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.user_id,
  UserRelations
> {
  constructor(@inject('datasources.inventdb') dataSource: InventorydbDataSource) {
    super(User, dataSource);
  }
}

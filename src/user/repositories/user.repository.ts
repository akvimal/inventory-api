import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../datasources';
import {User} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.user_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(User, dataSource);
  }
}

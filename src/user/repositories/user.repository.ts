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




// import {inject, Getter} from '@loopback/core';
// import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
// import {InventDbDataSource} from '../datasources';
// import {User} from '../models';
// import { UserRelations } from '../../role/models';
// import { UserRole } from '../models/userRole.model ';
// import { Userrole } from '../../role/models/userRole.model';
// import { UserRoleRepository } from './userRole.repository';
// export class UserRepository extends DefaultCrudRepository<
//   User,
//   typeof User.prototype.user_id,
//   UserRelations
// > {

//      public readonly userRole: HasManyRepositoryFactory<
//      UserRole,
//      typeof User.prototype.user_id
// >;
    
//       constructor(
//         @inject('datasources.inventdb') dataSource: InventDbDataSource,
//         @repository.getter(UserRoleRepository)
//         userRoleRepositoryGetter: Getter<UserRoleRepository>,
//         ){
//       super(User, dataSource);
//       this.userRole = this.createHasManyRepositoryFactoryFor(
//         'userRole',
//         userRoleRepositoryGetter,
//       );
//       }
//   }


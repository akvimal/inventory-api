import {inject} from '@loopback/core';
import {DefaultCrudRepository, repository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import { ProductLifeCycle } from '../models/productLifecycle.model';
import { __await } from 'tslib';



export class ProductLifeCycleRepository extends DefaultCrudRepository<
  ProductLifeCycle,
  typeof ProductLifeCycle.prototype.product_id
  
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(ProductLifeCycle, dataSource);
  }
}

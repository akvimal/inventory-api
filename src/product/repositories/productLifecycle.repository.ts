import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import { ProductLifeCycle } from '../models/productLifecycle.model';


export class ProductLifeCycleRepository extends DefaultCrudRepository<
  ProductLifeCycle,
  typeof ProductLifeCycle.prototype.product_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(ProductLifeCycle, dataSource);
  }
}

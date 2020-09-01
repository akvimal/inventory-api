import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import {Product} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.product_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(Product, dataSource);
  }
}

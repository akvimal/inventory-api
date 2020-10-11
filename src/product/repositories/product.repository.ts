import {inject} from '@loopback/core';
import {DefaultCrudRepository,repository} from '@loopback/repository';
import {InventDbDataSource} from '../../user/datasources';
import {Product} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.product_id
> {
  constructor(@inject('datasources.inventdb') dataSource: InventDbDataSource) {
    super(Product, dataSource);
    // this.dataSource.execute("select * from products", [])
  }
}
export class SomeController {
  constructor(
    @repository(ProductRepository) public ProductRepository: ProductRepository,
    @inject('datasources.inventdb') public dataSource: InventDbDataSource,
  ) {}
      // const datasource = new SomeDataSource(dsconfig);
     // dataSource.execute(sqlStatement);
     someMethod(){
     //  this.dataSource.connector.execute(sql, params, cb);
     }
  
  }

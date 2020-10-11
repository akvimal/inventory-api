// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { ProductLifeCycle } from './productLifecycle.model';
import { group } from 'console';
// @model({name: 'products',
//  settings: {strict: false}

//  settings: {relations: {
//   "products": {
//     "type":"belongsTo",
//     "model": "products",
//     "foreignKey": "product_id",
//     "primaryKey": "product_id"
//   }
// },
// foreignKeys: {
//   name: 'user_id_too_users',
//   entity: 'productlifecycle',
//   entityKey: 'product_id',
//   foreignKey: 'product_id'

// }
// } 
// })
@model({
  settings: { postgresql: { schema: 'public', table: 'products'} },
})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  product_id?: number;

  
  @property({
    type: 'string',
  })
  product_type?: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  status: string;

  @property({
    type: 'string',
    postgresql: {
      dataType: 'boolean',
    },
  })
  active?: string;

  @property({
    type: 'object',
  })
  properties?: object;  //json file

  // @hasMany(()=>ProductLifeCycle, {keyTo:'product_id'})
  // ProductLifeCycles: ProductLifeCycle[];
  
  // product.repository.find({
  //   where: {
  //     product_type.status: 'Installed',
  //   },
  //   menu: 'product_type.status',
  // });


  constructor(data?: Partial<Product>) {
    super(data);
  }
}

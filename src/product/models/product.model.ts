// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { ProductLifeCycle } from './productLifecycle.model';
@model({name: 'products',
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
    type: 'boolean',
    default: 'Y',
  })
  active?: boolean;

  @property({
    type: 'object',
  })
  properties?: object;

  @hasMany(()=>ProductLifeCycle, {keyTo:'product_id'})
  ProductLifeCycles: ProductLifeCycle[];
  

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

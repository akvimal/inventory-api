// import {uuid} from '@loopback/core';
import {Entity, model, property, hasMany} from '@loopback/repository';
import { Location } from '../../location/models/location.model';
import { Product } from './product.model';
import { Client } from '@loopback/testlab';
@model({name: 'product_lifecycles',
//  settings: {strict: false}
})
export class ProductLifeCycle extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  start_date?: Date;

  @property({
    type: 'date',
  })
  end_date?: Date;

  @property({
    type: 'string',
  })
  status: string;

  @property({
    type: 'number',
    id: true,
  })
  product_id?: number;

  @property({
    type: 'number',
    id: true,
  })
  location_id?: number;

  @property({
    type: 'number',
    id: true,
  })
  client_id?: number;

  @hasMany(() => Product, {through: {model: () => ProductLifeCycle}})
  products: Product[];
  clients:Client[];

  constructor(data?: Partial<ProductLifeCycle>) {
    super(data);
  }
}

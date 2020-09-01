// import {uuid} from '@loopback/core';
import {Entity, model, property} from '@loopback/repository';
@model({name: 'products', settings: {strict: false}})
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

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

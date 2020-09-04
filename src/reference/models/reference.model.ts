// import {uuid} from '@loopback/core';
import {Entity, model, property, } from '@loopback/repository';


@model({name: 'references', settings: {strict: false}})
export class Reference extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  reference_id?: number;

  @property({
    type: 'string',
  })
  category?: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  active: string;


  constructor(data?: Partial<Reference>) {
    super(data);
  }
}

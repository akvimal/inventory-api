import {
    Count,
    CountSchema,
    Filter,
    repository,
    Where,
  } from '@loopback/repository';
  import {
    get,
    getFilterSchemaFor,
    getModelSchemaRef,
    getWhereSchemaFor,
    param,
    post,
    requestBody,
  } from '@loopback/rest';
import { ProductLifeCycle } from '../models/productLifecycle.model';
import { ProductLifeCycleRepository } from '../repositories/productLifecycle.repository';
  
  export class ProductLifecycleController {
    constructor(
      @repository(ProductLifeCycleRepository)
      public ProductLifeCycleRepository: ProductLifeCycleRepository,
    ) {}
  
    @post('/productslifecycle', {
      responses: {
        '200': {
          description: 'Product model instance',
          content: {'application/json': {schema: getModelSchemaRef(ProductLifeCycle)}},
        },
      },
    })
    async create(
      @requestBody({
        content: {
          'application/json': {
            schema: getModelSchemaRef(ProductLifeCycle, {
              exclude: ['product_id'],
            }),
          },
        },
      })
      ProductLifeCycle: Omit<ProductLifeCycle, 'product_id'>,
    ): Promise<ProductLifeCycle> {
      return this.ProductLifeCycleRepository.create(ProductLifeCycle);
    }
    // /api/products?filter[where][id]=1
  
    @get('/productslifecycle/count',
     {
      responses: {
        '200': {
          description: 'Products model count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async count(
      @param.query.object('where', getWhereSchemaFor(ProductLifeCycle)) where?: Where,
    ): Promise<Count> {
      return this.ProductLifeCycleRepository.count(where);
    }
  
    // Account.find({where: {product_type: 'Baconbit'}, }, function(err, accounts) { /* ... */ });
    @get('/productslifecycle', {
      responses: {
        '200': {
          description: 'Array of Products model instances',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: getModelSchemaRef(ProductLifeCycle, {includeRelations: true}),
              },
            },
          },
        },
      },
    })
    async find(
      @param.query.object('filter', getFilterSchemaFor(ProductLifeCycle))
      filter?: Filter,
    ): Promise<ProductLifeCycle[]> {
      return this.ProductLifeCycleRepository.find(filter);
    }
    // @patch('/plugins', {
    //   responses: {
    //     '200': {
    //       description: 'Plugins PATCH success count',
    //       content: {'application/json': {schema: CountSchema}},
    //     },
    //   },
    // })
    // async updateAll(
    //   @requestBody() plugin: Plugin,
    //   @param.query.object('where', getWhereSchemaFor(Plugin)) where?: Where,
    // ): Promise<Count> {
    //   return this.pluginRepository.updateAll(plugin, where);
    // }
  
    // @get('/plugins/{id}', {
    //   responses: {
    //     '200': {
    //       description: 'Plugin model instance',
    //       content: {'application/json': {schema: {'x-ts-type': Plugin}}},
    //     },
    //   },
    // })
    // async findById(@param.path.string('id') id: string): Promise<Plugin> {
    //   return this.pluginRepository.findById(id);
    // }
  
    // @patch('/plugins/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Plugin PATCH success',
    //     },
    //   },
    // })
    // async updateById(
    //   @param.path.string('id') id: string,
    //   @requestBody({
    //     content: {
    //       'application/json': {
    //         schema: getModelSchemaRef(Plugin, {partial: true}),
    //       },
    //     },
    //   })
    //   plugin: Plugin,
    // ): Promise<void> {
    //   await this.pluginRepository.updateById(id, plugin);
    // }
  
    // @put('/plugins/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Plugin PUT success',
    //     },
    //   },
    // })
    // async replaceById(
    //   @param.path.string('id') id: string,
    //   @requestBody() plugin: Plugin,
    // ): Promise<void> {
    //   await this.pluginRepository.replaceById(id, plugin);
    // }
  
    // @del('/plugins/{id}', {
    //   responses: {
    //     '204': {
    //       description: 'Plugin DELETE success',
    //     },
    //   },
    // })
    // async deleteById(@param.path.string('id') id: string): Promise<void> {
    //   await this.pluginRepository.deleteById(id);
    // }
  }
  
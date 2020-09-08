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
import { LocationRepository } from '../repositories/location.repository';
import { Location } from '../models/location.model';

export class LocationControler {
  constructor(
    @repository(LocationRepository)
    public locationRepository: LocationRepository,
  ) {}

  @post('/locations', {
    responses: {
      '200': {
        description: 'Role model instance',
        content: {'application/json': {schema: getModelSchemaRef(Location)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Location, {
            exclude: ['id'],
          }),
        },
      },
    })
    role: Omit<Location, 'id'>,
  ): Promise<Location> {
    return this.locationRepository.create(role);
  }

  @get('/locations/count', {
    responses: {
      '200': {
        description: 'Locations model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Location)) where?: Where,
  ): Promise<Count> {
    return this.locationRepository.count(where);
  }

  @get('/locations', {
    responses: {
      '200': {
        description: 'Array of Roles model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Location, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Location))
    filter?: Filter,
  ): Promise<Location[]> {
    return this.locationRepository.find(filter);
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

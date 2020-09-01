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
import {Role} from '../models';
import {RoleRepository} from '../repositories';

export class RoleControler {
  constructor(
    @repository(RoleRepository)
    public roleRepository: RoleRepository,
  ) {}

  @post('/roles', {
    responses: {
      '200': {
        description: 'Role model instance',
        content: {'application/json': {schema: getModelSchemaRef(Role)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Role, {
            exclude: ['role_id'],
          }),
        },
      },
    })
    role: Omit<Role, 'role_id'>,
  ): Promise<Role> {
    return this.roleRepository.create(role);
  }

  @get('/roles/count', {
    responses: {
      '200': {
        description: 'Roles model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Role)) where?: Where,
  ): Promise<Count> {
    return this.roleRepository.count(where);
  }

  @get('/roles', {
    responses: {
      '200': {
        description: 'Array of Roles model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Role, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Role))
    filter?: Filter,
  ): Promise<Role[]> {
    return this.roleRepository.find(filter);
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

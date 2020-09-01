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
import {User} from '../models';
import {UserRepository} from '../repositories';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  @post('/users', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            exclude: ['user_id'],
          }),
        },
      },
    })
    user: Omit<User, 'user_id'>,
  ): Promise<User> {
    return this.userRepository.create(user);
  }

  @get('/users/count', {
    responses: {
      '200': {
        description: 'Users model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where,
  ): Promise<Count> {
    return this.userRepository.count(where);
  }

  @get('/users', {
    responses: {
      '200': {
        description: 'Array of Users model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(User, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(User))
    filter?: Filter,
  ): Promise<User[]> {
    return this.userRepository.find(filter);
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

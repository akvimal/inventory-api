import {
    Count,
    CountSchema,
    Filter,
    FilterExcludingWhere,
    repository,
    Where,
  } from '@loopback/repository';
  import {
    del,
    get,
    getModelSchemaRef,
    param,
    patch,
    post,
    put,
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
                title: 'New User',
                exclude: ['user_id'],
              }),
            },
          },
        })
        user: Omit<User, 'user_id'>,
      ): Promise<User> {
        return this.userRepository.create(user);
      }
  
    @get('/users', {
      responses: {
        '200': {
          description: 'Array of User model instances',
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
    async find(@param.filter(User) filter?: Filter<User>): Promise<User[]> {
      return this.userRepository.find(filter);
    }
  
  }
  
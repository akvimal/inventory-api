import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import * as dotenv from 'dotenv';
import * as dotenvExt from 'dotenv-extended';
import path from 'path';
import {MySequence} from './sequence';

export {ApplicationConfig};

export class InventoryApiApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    dotenv.config();
    dotenvExt.load({
      schema: '.env',
      errorOnMissing: true,
    });
    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        dirs: ['user','product'],
        extensions: ['.controller.js'],
        nested: true,
      },
      datasources: {
        dirs: ['user'],
        extensions: ['.datasource.js'],
        nested: true,
      },
      models: {
        dirs: [
          'user','product'
        ],
        extensions: ['.model.js'],
        nested: true,
      },
      repositories: {
        dirs: [
          'user','product'
        ],
        extensions: ['.repository.js'],
        nested: true,
      },
    };
  }
}

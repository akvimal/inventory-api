import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
export class InventorydbDataSource extends juggler.DataSource {
  static dataSourceName = 'inventdb';

  constructor(
    @inject('datasources.config.inventdb', {optional: true})
    dsConfig: object = {
      name: 'inventdb',
      connector: 'postgresql',
      localport: process.env.PORT,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      schema: process.env.DB_SCHEMA,
      // url: ReadProperties.getDBUrl(),
      // host: ReadProperties.getDBHost(),
      // port: 5432,
      // user: ReadProperties.getDBUser(),
      // password: ReadProperties.getDBPassword(),
      // database: ReadProperties.getDBDataBase(),
      // schema: ReadProperties.getDBSchema(),
      // min: ReadProperties.getDBMin(),
      // max: ReadProperties.getDBMax(),
      // idleTimeoutMillis: ReadProperties.getDBIdealTimeoutMillis(),
      // connectionTimeoutMillis: ReadProperties.getDBConnectionTimeoutMillis(),

//      host: 'veloxdev.cc3echcrqjmr.us-east-1.rds.amazonaws.com',
      // host: 'localhost',
      // port: 5432,
      // user: 'postgres',
      // password: '',
      // database: 'plinventdb',
    },
  ) {
    console.log('dsConfig :' + dsConfig);
    super(dsConfig);
  }
}

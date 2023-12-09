import 'reflect-metadata';
import { createConnection } from 'typeorm';

export const AppDataSource = createConnection({
    type: 'mysql',
  host: '3.224.24.153',
  port: 3306,
  username: 'admin',
  password: 'admin',
  database: 'supermarket',
  synchronize: false,
  logging: true,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: [],
});
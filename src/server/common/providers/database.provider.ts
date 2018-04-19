import {createConnection, } from 'typeorm';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const options: SqlServerConnectionOptions = {
    type: 'mssql',
    host: '[YOUR_HOST_HERE]',
    username: '[YOUR_USER_HERE]',
    password: '[YOUR_PASSWORD_HERE]',
    database: '[YOUR_DATABASE_NAME_HERE]',
    cache: true,
    entities: ['src/server/common/data/models/**/*.model{.ts,.js}'],
    synchronize: true,
    migrationsTableName: '__MigrationHistory',
    migrations: ['src/server/common/data/migrations/**{.js,.ts}'],
    cli: {
        migrationsDir: 'src/server/common/data/migrations'
    }
};

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection(options)
    },
];
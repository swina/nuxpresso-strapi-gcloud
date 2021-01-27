module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT'),
        host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        //host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD')
      },
      options: {
        pool: {
          min: 0,
          max: 20,
          acquireTimeoutMillis: 30000,
          createTimeoutMillis: 30000,
          idleTimeoutMillis : 30000,
          createRetryIntervalMillis :3000
        }
      }
    },
  },
});

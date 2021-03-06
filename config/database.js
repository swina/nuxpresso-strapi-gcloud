module.exports = ({ env }) => ({
  defaultConnection: 'default',
  /*connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('DATABASE_URI'),
      },
      options: {
        ssl: true,
      },
    },
  },
  */
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT'),
        //host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD')
      },
      options: {
        pool: {
          min: 0,
          max: 20
        }
      }
    },
  },
});

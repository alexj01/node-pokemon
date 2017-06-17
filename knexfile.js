// Update with your config settings.

module.exports = {

development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'alex',
      password: 'password',
      database: 'pokemon',
      charset: 'utf8'
    },
    debug: true,
    migrations: {
      tableName: 'migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: 'seeds'
    },
    pool: {
      min: 1,
      max: 1
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

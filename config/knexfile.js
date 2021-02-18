var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const pgConnect = `${process.env.DATABASE_URL}?sslmode=true`;
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    pool: {
      min: 2,
      max: 10,
    },
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },

  production: {
    client: 'pg',
    connection: pgConnect,
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};

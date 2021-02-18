var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

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
    connection:
      'postgres://ztbbehmwoxabnw:92a9fee1e8dba1f8df2f1483557235a6875a43c611da7d3d61e36b6d48c97239@ec2-35-174-118-71.compute-1.amazonaws.com:5432/d5l16f5si8l56sssl=true',
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};

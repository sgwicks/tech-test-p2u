const user = require('./user')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      ...user,
      database: 'tech_test_p2u'
      },
      migrations: {
        directory: './db/migrations'
        },
      seeds: {
        directory: './db/seeds'
        }
  }
};

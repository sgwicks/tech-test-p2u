const user = require('./user')

module.exports = {
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
};

const connection = require('knex')
const dbConfig = require('../knexfile')

module.exports = connection(dbConfig)
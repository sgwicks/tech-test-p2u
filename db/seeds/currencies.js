const currencies = require('../data/currencies')
const logs = require('../data/logs')

exports.seed = function(knex) {
  return knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      return knex('currencies').insert(currencies);
    })
    .then(() => {
      return knex('audit_logs').insert(logs)
    });
};

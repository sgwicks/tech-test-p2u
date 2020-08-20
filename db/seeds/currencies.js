const currencies = require('../data/currencies')

exports.seed = function(knex) {
  return knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      return knex('currencies').insert(currencies);
    });
};

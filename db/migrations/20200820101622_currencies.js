
exports.up = function(knex) {
  return knex.schema.createTable('currencies', currenciesTable => {
      currenciesTable.string('currency', 3).primary();
      currenciesTable.decimal('GBP').defaultTo(0)
      currenciesTable.decimal('USD').defaultTo(0)
      currenciesTable.decimal('AUD').defaultTo(0)
      currenciesTable.decimal('EUR').defaultTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('currencies')
};

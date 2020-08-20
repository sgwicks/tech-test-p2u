
exports.up = function(knex) {
  return knex.schema.createTable('audit_logs', logTable => {
      logTable.increments('log_id');
      logTable.string('user_id').notNullable();
      logTable.string('currency_from', 3).notNullable();
      logTable.string('currency_to', 3).notNullable();
      logTable.decimal('exchange_rate').notNullable();
      logTable.decimal('amount_given').notNullable();
      logTable.decimal('amount_received').notNullable();
      logTable.datetime('date').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('audit_logs')
};

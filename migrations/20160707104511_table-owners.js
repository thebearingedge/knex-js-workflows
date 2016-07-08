
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('owners', function (tb) {
      tb.increments('id')
      tb.string('name')
    })
};

exports.down = function(knex, Promise) {

  return knex
    .schema
    .dropTable('owners')
};

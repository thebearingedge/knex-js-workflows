
exports.up = function(knex, Promise) {

  return knex
    .schema
    .table('pets', function (tb) {
      tb.integer('owner_id')
        .references('id')
        .inTable('owners')
    })
};

exports.down = function(knex, Promise) {

  return knex
    .schema
    .table('pets', function (tb) {
      tb.dropColumn('owner_id')
    })
};

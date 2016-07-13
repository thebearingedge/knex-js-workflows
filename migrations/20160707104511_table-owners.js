
exports.up = function (knex) {

  return knex
    .schema
    .createTable('owners', function (tb) {
      tb.increments('id')
      tb.string('name')
    })
}

exports.down = function (knex) {

  return knex
    .schema
    .dropTable('owners')
}

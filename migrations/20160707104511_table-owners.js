
exports.up = function (knex) {

  return knex
    .schema
    .createTable('owners', function (tb) {
      tb.increments('id')
      tb.string('name')
        .notNullable()
    })
}

exports.down = function (knex) {

  return knex
    .schema
    .dropTable('owners')
}

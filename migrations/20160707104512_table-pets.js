
exports.up = function (knex) {

  return knex
    .schema
    .createTable('pets', function (tb) {
      tb.increments('id')
      tb.string('name')
        .notNullable()
      tb.enum('animal', ['dog', 'cat', 'ferret'])
        .notNullable()
    })
}

exports.down = function (knex) {

  return knex
    .schema
    .dropTable('pets')
}

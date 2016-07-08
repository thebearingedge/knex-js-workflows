
exports.up = function(knex, Promise) {

  return knex
    .schema
    .createTable('pets', function (tb) {
      tb.increments('id')
      tb.string('name')
      tb.enum('animal', ['dog', 'cat', 'ferret'])
    })
};

exports.down = function(knex, Promise) {

  return knex
    .schema
    .dropTable('pets')
};

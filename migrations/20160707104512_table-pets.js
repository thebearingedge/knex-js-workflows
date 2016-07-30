
export const up = ({ schema }) =>

  schema
    .createTable('pets', tb => {
      tb.increments('id')
      tb.string('name')
        .notNullable()
      tb.enum('animal', ['dog', 'cat', 'ferret'])
        .notNullable()
    })


export const down = ({ schema }) =>

  schema.dropTable('pets')

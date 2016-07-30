
export const up = ({ schema }) =>

  schema
    .createTable('owners', tb => {
      tb.increments('id')
      tb.string('name')
        .notNullable()
    })


export const down = ({ schema }) =>

  schema.dropTable('owners')


export const up = ({ schema }) =>

  schema
    .table('pets', tb => {
      tb.integer('owner_id')
        .notNullable()
        .references('id')
        .inTable('owners')
    })


export const down = ({ schema }) =>

  schema
    .table('pets', tb => {
      tb.dropColumn('owner_id')
    })

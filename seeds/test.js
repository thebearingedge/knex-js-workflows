
import john from './owner.json'
import pets from './pets.json'


export const seed = async knex => {

  await knex.raw('truncate table "owners" restart identity cascade')

  const [ owner_id ] = await knex
    .insert(john)
    .into('owners')
    .returning('id')

  const johnsPets = pets.map(pet => ({ ...pet, owner_id }))

  await knex
    .insert(johnsPets)
    .into('pets')
}

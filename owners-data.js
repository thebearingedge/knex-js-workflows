export default function ownersData(knex) {

  return { create, findById }

  async function findById(id, trx = knex) {

    const owner = await trx
      .select('*')
      .from('owners')
      .where({ id })
      .first()

    if (!owner) return null

    const pets = await trx
      .select('*')
      .from('pets')
      .where('owner_id', id)

    return Object.assign(owner, { pets })
  }


  async function create(owner) {

    return knex.transaction(async trx => {

      const { name, pets } = owner

      const [ owner_id ] = await trx
        .insert({ name })
        .into('owners')
        .returning('id')

      const ownerPets = pets.map(pet => ({ ...pet, owner_id }))

      await trx
        .insert(ownerPets)
        .into('pets')

      return findById(owner_id, trx)
    })
  }
  
}

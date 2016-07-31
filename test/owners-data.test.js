/* global beforeEach, afterEach, describe, it */
import { begin, expect } from './__setup__'
import ownersData from '../owners-data'


describe('owners', () => {

  let trx
  let owners

  beforeEach(begin(_trx => {
    trx = _trx
    owners = ownersData(trx)
  }))

  afterEach(() => trx.rollback())

  const Owner = {
    id: Number,
    name: String,
    pets: [{ id: Number, name: String, animal: String, owner_id: Number }]
  }

  describe('#findById', () => {

    it('reads an owner by id and includes their pets', async () => {

      const owner = await owners.findById(1)

      expect(owner).to.have.structure(Owner)
    })

  })

  describe('#create', () => {

    it('inserts an owner and their pets', async () => {

      const owner = await owners.create({
        name: 'Bart Simpson',
        pets: [
          {
            name: 'Santa\'s Little Helper',
            animal: 'dog'
          },
          {
            name: 'Snowball II',
            animal: 'cat'
          }
        ]
      })

      expect(owner).to.have.structure(Owner)

      const [ dog, cat ] = owner.pets

      expect(dog.owner_id).to.equal(owner.id)
      expect(cat.owner_id).to.equal(owner.id)
    })

  })

})

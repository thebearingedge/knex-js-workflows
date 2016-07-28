
import { begin, expect } from './__setup__'
import ownersData from '../owners-data'


describe('owners', () => {

  const Owner = {
    id: Number,
    name: String,
    pets: Array
  }

  const Pet = {
    id: Number,
    name: String,
    animal: String,
    owner_id: Number
  }

  let trx
  let owners

  beforeEach(begin(_trx => {
    trx = _trx
    owners = ownersData(trx)
  }))

  afterEach(() => trx.rollback())

  describe('#findById', () => {

    it('reads an owner by id and includes their pets', async () => {

      const owner = await owners.findById(1)

      expect(owner).to.have.interface(Owner)

      const [ cat ] = owner.pets

      expect(cat).to.have.interface(Pet)
      expect(cat.owner_id).to.equal(owner.id)
    })

  })

  describe('#create', () => {

    it('inserts an owner and their pets', async () => {

      const owner = await owners.create({
        name: 'Bart',
        pets: [
          {
            name: 'Santa\'s Little Helper',
            animal: 'dog'
          },
          {
            name: 'Snowball V',
            animal: 'cat'
          }
        ]
      })

      expect(owner).to.have.interface(Owner)

      const [ dog ] = owner.pets

      expect(dog).to.have.interface(Pet)
      expect(dog.owner_id).to.equal(owner.id)
    })

  })

})

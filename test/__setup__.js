
import Knex from 'knex'
import { development } from '../knexfile.js'
import chai from 'chai'
import chaiStruct from 'chai-struct'

chai.use(chaiStruct)

export const { expect } = chai

export const knex = Knex(development)

export const rejected = promise => promise.catch(err => err)

export const begin = ready => {
  return done => rejected(knex.transaction(trx => {
    ready(trx)
    done()
  }))
}

before(() => knex.seed.run())

after(() => knex.destroy())

import chai from 'chai'
import chaiHttp from 'chai-http'
import { api } from '../../api/server'

chai.use(chaiHttp)
const { expect, request } = chai

describe.only('Ingredient controller', () => {
  describe('get all ingredients vi api/v11/ingredients', () => {
    it('should return all ingredients', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(484)
    })
  })

  describe('filter ingredients ', () => {
    it('should return popular ingredients', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients?sort=popular`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(10)
    })

    it('should return 404 for invalid sorting value', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients?sort=invalid`
      )

      expect(response).to.have.status(404)
      expect(response.body.Error).to.equal('Invalid sorting value')
    })

    it('should return random ingredients', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients?sort=random`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(10)
    })
  })

  describe('get ingredient details by id via api/v1/ingredients/:ingredientId', () => {
    it('should return 200 for a valid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/5fd2ccbe6475e3093189d0bc`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })

    it('should return 404 for an invalid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/0000`
      )

      expect(response).to.have.status(404)
      expect(response.body.Error).to.equal('Invalid object id')
    })
  })
})

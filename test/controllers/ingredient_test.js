import chai from 'chai'
import chaiHttp from 'chai-http'
import { api } from '../../api/server'

chai.use(chaiHttp)
const { expect, request } = chai

describe.only('Ingredient controller', () => {
  describe('get ingredient details by id via api/v1/ingredients/:ingredientId', () => {
    it('should return 200 for a valid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/552`
      )

      expect(response).to.have.status(200)
    })

    it('should return additional details for a valid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/552`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
      expect(response.body.image).to.not.be.empty
    })

    it('should return 404 for an invalid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/1111`
      )

      expect(response).to.have.status(404)
      expect(response.body.error).to.equal('Ingredient not found')
    })
  })

  describe('get ingredient list via api/v1/ingredients/list/:listSelection', () => {
    it('should return all ingredients', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/list/all`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })

    it('should return 404 for an invalid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/list/invalidargument`
      )

      expect(response).to.have.status(404)
      expect(response.body.error).to.equal('Ingredients not found')
    })

    it('should return the most popular ingredients', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/list/popular`
      )

      expect(response).to.have.status(404)
      expect(response.body.error).to.equal('Ingredients not found')
    })

    it('should return random ingredients', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/ingredients/list/random`
      )

      expect(response).to.have.status(404)
      expect(response.body.error).to.equal('Ingredients not found')
    })
  })
})

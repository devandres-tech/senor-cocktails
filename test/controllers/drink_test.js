import chai from 'chai'
import chaiHttp from 'chai-http'
import { api } from '../../api/server'

chai.use(chaiHttp)
const { expect, request } = chai

describe('Drink Controller', () => {
  describe('get drink list by selection via api/v1/drinks/list/:listSelection', () => {
    it('should return 404 for invalid request', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/list/invalidargument`
      )

      expect(response).to.have.status(404)
      expect(response.body.error).to.equal('Invalid request')
    })

    it('should return the latest drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/list/latest`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })

    it('should return random drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/list/randomselection`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })

    it('should return the most popular drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/list/popular`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })
  })

  describe('get drink by id via api/v1/drinks/:drinkId', () => {
    it.only('should return 404 if drink does exist', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/invalidid`
      )

      expect(response).to.have.status(404)
      expect(response.body.error).to.equal('Drink not found')
    })

    it.only('should return 200 when drink is found', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/11007`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })
  })
})

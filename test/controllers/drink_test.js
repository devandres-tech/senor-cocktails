import chai from 'chai'
import chaiHttp from 'chai-http'
import { api } from '../../api/server'

chai.use(chaiHttp)
const { expect, request } = chai

describe.only('Drink Controller', () => {
  describe('get drink details by id via api/v1/drinks/:drinkId', () => {
    it('should return 404 if drink does exist', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/invalidid`
      )

      expect(response).to.have.status(404)
      expect(response.body.Error).to.equal('Invalid object id')
    })

    it('should return 200 when drink is found', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks/5fd81b89fcdcc2d6da1c864f`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.not.be.empty
    })
  })

  describe('get drink list by selection via api/v1/drinks/list/:listSelection', () => {
    it('should return empty object when sort is not a valid argument', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks?sort=invalid`
      )

      expect(response).to.have.status(200)
      expect(response.body).to.be.empty
    })

    it('should return the latest drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks?sort=latest`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(10)
    })

    it('should return all drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(596)
    })

    it('should return random drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks?sort=random`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(10)
    })

    it('should return the most popular drinks', async () => {
      const response = await request(api).get(
        `${process.env.BASE_API_URL}/drinks?sort=popular`
      )

      expect(response).to.have.status(200)
      expect(response.body.length).to.equal(10)
    })
  })
})

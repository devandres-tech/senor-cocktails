import chai from 'chai'
import { listen } from '../src/server'
import config from 'config'
const { expect } = chai

// Test suite
describe('Server', () => {
  afterEach(() => {
    listen.close()
  })

  it('should test the server is running in the correct port', () => {
    expect(listen.address().port).to.equal(config.get('port'))
  })
})

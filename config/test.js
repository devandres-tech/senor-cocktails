const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: 'Test',
  port: Number(process.env.TEST_PORT),
  base_url: process.env.BASE_API_URL,
}

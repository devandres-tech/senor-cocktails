const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: 'Test',
  port: Number(process.env.TEST_PORT),
}

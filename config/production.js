const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: 'Production',
  port: process.env.PROD_PORT,
}

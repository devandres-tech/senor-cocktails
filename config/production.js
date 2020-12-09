const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: 'Production',
  port: parseInt(process.env.PROD_PORT, 10),
}

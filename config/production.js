const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: 'Production',
  port: Number(process.env.PORT),
}

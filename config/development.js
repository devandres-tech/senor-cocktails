const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  name: 'Server Development',
  port: `${process.env.PORT}`,
}

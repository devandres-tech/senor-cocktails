import express from 'express'
import colors from 'colors'
import config from 'config'
import morgan from 'morgan'
const debug = require('debug')('server:debug')

const app = express()

// // HTTP request logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

export const listen = app.listen(
  config.get('port'),
  debug(
    `server is running on port ${config.get('port')} and in ${config.get(
      'name'
    )} mode`
  ),
  console.log(
    `Server running in ${config.get('name')} mode on port ${config.get('port')}`
      .blue.bold
  )
)

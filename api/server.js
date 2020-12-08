import express from 'express'
import colors from 'colors'
import config from 'config'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import drinkRoutes from './routes/drinkRoutes'
import ingredientRoutes from './routes/ingredientRoutes'

const debug = require('debug')('server:debug')
const api = express()
api.use(cors())

api.use(bodyParser.urlencoded({ extended: true }))

// // HTTP request logger
if (process.env.NODE_ENV === 'development') {
  api.use(morgan('dev'))
}

api.use(express.json())

api.use('/api/v1/drinks', drinkRoutes)
api.use('/api/v1/ingredients', ingredientRoutes)

const listen = api.listen(
  config.get('port'),
  '0.0.0.0',
  debug(
    `server is running on port ${config.get('port')} and in ${config.get(
      'name'
    )} mode`.cyan.bold
  ),
  console.log(
    `Server running in ${config.get('name')} mode on port ${config.get('port')}`
      .blue.bold
  )
)

// export for testing purposes
export { api, listen }

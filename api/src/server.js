import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import config from 'config'

const app = express()

// // HTTP request logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.listen(
  config.get('port'),
  console.log(
    `Server running in ${config.get('name')} on port ${config.get('port')}`
      .yellow.bold
  )
)

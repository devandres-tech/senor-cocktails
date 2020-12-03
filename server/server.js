import express from 'express'
import dotenv from 'dotenv'

import drinkRoutes from './routes/drinkRoutes.js'

dotenv.config()

const app = express()

// HTTP request logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/drinks', drinkRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)

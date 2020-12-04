import asyncHandler from 'express-async-handler'
import fetch from 'node-fetch'

const getDrinkList = asyncHandler(async (req, res) => {
  const { list } = req.params

  const response = await fetch(
    `${process.env.THE_COCKTAIL_DB_BASE_URL}/${list}.php`
  )

  // res.status >= 200 && res.status < 300
  if (!response.ok) {
    res.status(404).json({ error: 'Invalid request' })
  }

  const data = await response.json()
  res.status(200).json(data)
})

export { getDrinkList }

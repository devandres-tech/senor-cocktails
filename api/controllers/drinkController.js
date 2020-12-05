import asyncHandler from 'express-async-handler'
import fetch from 'node-fetch'

const getDrinkById = asyncHandler(async (req, res) => {
  const { drinkId } = req.params
  let data

  const response = await fetch(
    `${process.env.THE_COCKTAIL_DB_BASE_URL}/lookup.php?i=${drinkId}`
  )

  try {
    data = await response.json()
  } catch (err) {
    res.status(404).json({ error: 'Drink not found' })
  }

  res.status(200).json(data)
})

const getDrinkList = asyncHandler(async (req, res) => {
  const { listSelection } = req.params

  const response = await fetch(
    `${process.env.THE_COCKTAIL_DB_BASE_URL}/${listSelection}.php`
  )

  if (!response.ok) {
    res.status(404).json({ error: 'Invalid request' })
  }

  const data = await response.json()
  res.status(200).json(data)
})

export { getDrinkList, getDrinkById }

;[
  {
    ingredient: 'Tequila',
    measurement: '1 1/2 oz',
    image: 'sdfasdfasdfadsf',
  },
  {
    ingredient: 'Lime',
    measurement: '1 1/2 oz',
    image: 'sdfasdfasdfadsf',
  },
  {
    ingredient: 'Water',
    measurement: '1 1/2 oz',
    image: 'sdfasdfasdfadsf',
  },
]

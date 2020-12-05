import asyncHandler from 'express-async-handler'
import fetch from 'node-fetch'

import { normalizeIngredients } from '../utils/utils'

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

  const drink = data.drinks[0]
  const ingredientArray = normalizeIngredients(drink)
  const normalizedDrink = {
    id: drink.idDrink,
    name: drink.strDrink,
    tags: [...drink.strTags.split(',')],
    category: drink.strCategory,
    IBA: drink.strIBA,
    alcoholic: drink.strAlcoholic,
    glassType: drink.strGlass,
    instructions: {
      EN: drink.strInstructions,
      DE: drink.strInstructionsDE,
      ES: drink.strInstructionsES,
      FR: drink.strInstructionsFR,
    },
    image: drink.strDrinkThumb,
    ingredients: ingredientArray,
    rating: 0,
    triedIt: false,
    createdAt: drink.dateModified,
  }

  res.status(200).json(normalizedDrink)
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

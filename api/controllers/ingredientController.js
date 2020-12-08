import asyncHandler from 'express-async-handler'
import fetch from 'node-fetch'

const getIngredientById = asyncHandler(async (req, res) => {
  const { ingredientId } = req.params
  let data

  const response = await fetch(
    `${process.env.THE_COCKTAIL_DB_BASE_URL}/lookup.php?iid=${ingredientId}`
  )

  try {
    data = await response.json()
  } catch (err) {
    res.status(404).json({ error: 'Invalid request' })
  }

  if (data.ingredients === null) {
    res.status(404).json({ error: 'Ingredient not found' })
  }

  const ingredient = data.ingredients[0]
  const image = encodeURI(
    `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}.png`
  )
  const normalizedIngredient = {
    id: ingredient.idIngredient,
    name: ingredient.strIngredient,
    description: ingredient.strDescription,
    type: ingredient.strType,
    alcoholic: ingredient.strAlcohol,
    ABV: ingredient.strAVB,
    userFavorite: false,
    image,
  }

  console.log(ingredient.strIngredient.trim())

  res.status(200).json(normalizedIngredient)
})

export { getIngredientById }

import asyncHandler from 'express-async-handler'
import fetch from 'node-fetch'
import mongoose from 'mongoose'

import { generateRandomNumbers } from '../utils/utils'
import Ingredient from '../models/IngredientModel'

const getIngredients = asyncHandler(async (req, res) => {
  const sort = req.query.sort
  const ingredients = await Ingredient.find({})

  if (!ingredients) {
    return res.status(404).json({ Error: 'Ingredients not found' })
  }

  if (sort === 'popular') {
    return res.status(200).json(ingredients.slice(0, 10))
  }

  if (sort === 'random') {
    const randomNumbers = generateRandomNumbers(10)
    const randomIngredients = randomNumbers.map((index) => {
      return ingredients[index]
    })
    return res.status(200).json(randomIngredients)
  }

  if ((sort !== 'popular' || sort !== 'random') && sort !== undefined) {
    return res.status(404).json({ Error: 'Invalid sorting value' })
  }

  res.status(200).json(ingredients)
})

const getIngredientById = asyncHandler(async (req, res) => {
  const { ingredientId } = req.params
  if (!mongoose.Types.ObjectId.isValid(ingredientId)) {
    res.status(404).json({ Error: 'Invalid object id' })
  }

  const ingredient = await Ingredient.findById(ingredientId)

  if (!ingredient) {
    res.status(404).json({ Error: 'Ingredient not found' })
  }

  res.status(200).json(ingredient)
})

export { getIngredientById, getIngredients }

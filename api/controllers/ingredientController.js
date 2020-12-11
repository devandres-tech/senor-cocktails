import asyncHandler from 'express-async-handler'
import fetch from 'node-fetch'
import mongoose from 'mongoose'

import { generateRandomNumbers } from '../utils/utils'
import Ingredient from '../models/IngredientModel'

const getIngredients = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find({})
  if (!ingredients) {
    res.status(404).json({ Error: 'Ingredients not found' })
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

// @route GET api/v1/ingredients/list/listSelection
// @desc get a list of ingredients (popular, random, all)
// @access public and private
const getIngredientList = asyncHandler(async (req, res) => {
  const listSelection = req.params.listSelection.toLowerCase()

  const response = await fetch(
    `${process.env.THE_COCKTAIL_DB_BASE_URL}/list.php?i=list`
  )
  const { drinks } = await response.json()

  const ingredientList = drinks.map((ingredient, index) => {
    return {
      name: ingredient.strIngredient1,
    }
  })

  const all = await Promise.all(
    ingredientList.map(async (item) => {
      const IngredientResponse = await fetch(
        `${
          process.env.THE_COCKTAIL_DB_BASE_URL
        }/search.php?i=${item.name.toString()}`
      )
      const { ingredients } = await IngredientResponse.json()
      if (!(ingredients === null)) {
        const image = encodeURI(
          `https://www.thecocktaildb.com/images/ingredients/${ingredients[0].strIngredient}.png`
        )
        return {
          name: ingredients[0].strIngredient,
          description: ingredients[0].strDescription,
          type: ingredients[0].strType,
          alcoholic: ingredients[0].strAlcohol,
          ABV: ingredients[0].strABV,
          image,
          userFavorite: [],
        }
      }
    })
  )

  all.forEach(async (ing) => {
    // const newIngredient = new Ingredient(ing)
    // const savedIng = await newIngredient.save()
  })

  res.status(200).json({})
  // const allIngs = ingredientList.map(async (ing) => {
  //   const { name } = await ing
  //   // console.log('inG', name)
  //   const IngredientResponse = await fetch(
  //     `${process.env.THE_COCKTAIL_DB_BASE_URL}/search.php?i=${name}`
  //   )
  //   const { ingredients } = await IngredientResponse.json()
  //   // const ingName = ingredients[0].strIngredient
  //   // console.log('ingsa-------', ingredients[0])
  //   return ingredients
  // })
})

export { getIngredientById, getIngredients }

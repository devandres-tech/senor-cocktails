import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

import Drink from '../models/drinkModel'

// @route GET api/v1/drinks/drinkId
// @desc get a drink by id
// @access public
const getDrinkById = asyncHandler(async (req, res) => {
  const { drinkId } = req.params
  if (!mongoose.Types.ObjectId.isValid(drinkId)) {
    return res.status(404).json({ Error: 'Invalid object id' })
  }

  const drink = await Drink.findById(drinkId)
  if (!drink) {
    return res.status(404).json({ Error: 'Drink not found' })
  }

  res.status(200).json(drink)
})

// @route GET api/v1/drinks?sort=<param>
// @desc get a selection of drinks (random, latest, popular)
// @access public and private
const getDrinks = asyncHandler(async (req, res) => {
  let sort
  if (req.query.sort) {
    sort = req.query.sort.toLocaleLowerCase()
  }
  const drinks = await Drink.find({})

  if (sort === 'random') {
    const randomDrinks = await Drink.aggregate([{ $sample: { size: 10 } }])
    return res.status(200).json(randomDrinks)
  }

  if (sort === 'popular') {
    const popularDrinks = [
      'Mojito',
      'Old Fashioned',
      'Long Island Tea',
      'Negroni',
      'Whiskey Sour',
      'Dry Martini',
      'Daiquiri',
      'Margarita',
      'Manhattan',
      'Moscow Mule',
    ]
    const popularDrinksFound = await Promise.all(
      popularDrinks.map(async (drink) => {
        const drinkFound = await Drink.find({ name: drink })
        return drinkFound[0]
      })
    )
    return res.status(200).json(popularDrinksFound)
  }

  if (sort === 'latest') {
    const latestDrinks = [
      'Figgy Thyme',
      'Michelada',
      'Gin and Soda',
      'Orange Rosemary Collins',
      'Garibaldi Negroni',
      'The Strange Weaver',
      'Pure Passion',
      'Autumn Garibaldi',
      'Blueberry Mojito',
      'Lazy Coconut Paloma',
    ]
    const latestDrinksFound = await Promise.all(
      latestDrinks.map(async (drink) => {
        const drinkFound = await Drink.find({ name: drink })
        return drinkFound[0]
      })
    )
    return res.status(200).json(latestDrinksFound)
  }

  if (
    (sort !== 'popular' || sort !== 'random' || sort !== 'latest') &&
    sort !== undefined
  ) {
    return res.status(200).json({})
  }

  res.status(200).json(drinks)
})

// @route GET api/v1/drinks/search
// @desc search drinks by using query params
// @access private
const searchDrinks = asyncHandler(async (req, res) => {
  const { ingredients, category } = req.query
  const ingredientsArray = [...ingredients.split(',')]
  let drinks
  if (category.length > 0) {
    drinks = await Drink.find({
      'ingredients.name': { $in: ingredientsArray },
      category: category,
    })
    return res.status(200).json(drinks)
  }

  drinks = await Drink.find({
    'ingredients.name': { $in: ingredientsArray },
  })

  if (!drinks) {
    return res.status(404).json({ Error: 'No drinks found' })
  }

  res.status(200).json(drinks)
})

export { getDrinks, getDrinkById, searchDrinks }

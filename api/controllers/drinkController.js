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

// @route GET api/v1/drinks/list/:drinkList
// @desc get a selection of drinks (random, latest, popular)
// @access public and private
const getDrinkList = asyncHandler(async (req, res) => {
  res.status(200).json(allDrinks)
})

export { getDrinkList, getDrinkById }

import express from 'express'

import {
  getDrinks,
  getDrinkById,
  searchDrinks,
} from '../controllers/drinkController'

const router = express.Router()

router.route('/').get(getDrinks)
router.route('/search').get(searchDrinks)
router.route('/:drinkId').get(getDrinkById)

export default router

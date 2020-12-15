import express from 'express'

import { getDrinks, getDrinkById } from '../controllers/drinkController'

const router = express.Router()

router.route('/').get(getDrinks)
router.route('/:drinkId').get(getDrinkById)

export default router

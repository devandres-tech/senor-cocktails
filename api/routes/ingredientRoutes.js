import express from 'express'

import {
  getIngredientById,
  getIngredients,
} from '../controllers/ingredientController'

const router = express.Router()

router.route('/').get(getIngredients)
router.route('/:ingredientId').get(getIngredientById)

export default router

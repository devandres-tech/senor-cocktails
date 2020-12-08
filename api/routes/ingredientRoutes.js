import express from 'express'

import {
  getIngredientById,
  getIngredientList,
} from '../controllers/ingredientController'

const router = express.Router()

router.route('/:ingredientId').get(getIngredientById)
router.route('/list/:listSelection').get(getIngredientList)

export default router

import express from 'express'

import { getIngredientById } from '../controllers/ingredientController'

const router = express.Router()

router.route('/:ingredientId').get(getIngredientById)

export default router

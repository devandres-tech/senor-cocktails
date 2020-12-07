import express from 'express'

import { getIngredientById } from '../controllers/ingredientController'

const router = express.Router()

router.get('/:ingredientId').get(getIngredientById)

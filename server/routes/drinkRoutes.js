import express from 'express'

import { getDrinksByCategory } from '../controllers/drinkController.js'

const router = express.Router()

router.route('/:category').get(getDrinksByCategory)

export default router

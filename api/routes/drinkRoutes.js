import express from 'express'

import { getDrinkList, getDrinkById } from '../controllers/drinkController'

const router = express.Router()

router.route('/:drinkId').get(getDrinkById)
router.route('/list/:listSelection').get(getDrinkList)

export default router

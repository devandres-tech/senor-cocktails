import express from 'express'

import { getDrinkList } from '../controllers/drinkController'

const router = express.Router()

router.route('/list/:listSelection').get(getDrinkList)

export default router

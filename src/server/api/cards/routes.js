import { Router } from 'express'
import authenticate from '~/middleware/authenticate'
import { index } from './controllers'

const router = Router()

router.route('/')
  .all(authenticate())
  .get(index.get)
  .post(index.create)

router.route('/:username')
  .all(authenticate())
  .get(index.getOne)

export default router

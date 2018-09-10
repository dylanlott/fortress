import { Router } from 'express'
import authenticate from '~/middleware/authenticate'
import { index, id } from './controllers'

const router = Router()

router.route('/')
  .all(authenticate())
  .get(index.get)
  .post(index.create)

router.route('/:username')
  .all(authenticate())
  .get(id.getOne)
  .put(id.update)
  .delete(id.delete)

export default router

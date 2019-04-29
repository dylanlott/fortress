import { Router } from 'express'
import authenticate from '~/middleware/authenticate'
import { index, detail } from './controllers'

const router = Router()

router.get('/', authenticate(), index.get)
router.post('/', authenticate(), index.post)
router.get('/:id', authenticate(), detail.get)

export default router

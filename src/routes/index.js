import Router from 'koa-router'
import {
  index as indexCtrl,
  start as startCtrl
} from '../controllers/indexCtrl'

const router = Router()

router.get('/', indexCtrl)
router.get('/start', startCtrl)

export default router

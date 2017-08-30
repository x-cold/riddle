import Router from 'koa-router'
import {
  index as indexCtrl,
  start as startCtrl,
  login as loginCtrl
} from '../controllers/indexCtrl'
import passport from 'koa-passport'
import {
  ensureLoggedIn
} from 'connect-ensure-login'

const router = Router()

router.get('/', indexCtrl)
router.get('/start', passport.authenticate('github', { failureRedirect: '/login' }), startCtrl)
router.get('/login', loginCtrl)
router.get('/login/github', passport.authenticate('github'))

export default router

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _indexCtrl = require('../controllers/indexCtrl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import passport from 'koa-passport'
// import {
//   ensureLoggedIn
// } from 'connect-ensure-login'

var router = (0, _koaRouter2.default)();

router.get('/', _indexCtrl.index);
// router.get('/start', passport.authenticate('github', { failureRedirect: '/login' }), startCtrl)
// router.get('/login', loginCtrl)
// router.get('/login/github', passport.authenticate('github'))

exports.default = router;
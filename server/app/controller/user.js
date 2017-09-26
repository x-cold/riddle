'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  * login() {
    const { ctx } = this;
    yield ctx.render('login.html');
  }

  * logout() {
    const { ctx } = this;
    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = UserController;

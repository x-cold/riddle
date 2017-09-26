'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  * index() {
    const { ctx } = this;
    const { user } = ctx;
    yield ctx.render('user.html', {
      user,
      userStr: JSON.stringify(user, null, 2)
    });
  }
}

module.exports = HomeController;

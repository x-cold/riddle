'use strict';

const Controller = require('egg').Controller;

class MissionController extends Controller {
  * first() {
    const { ctx } = this;
    yield ctx.render('mission/1.html');
  }

  * second() {
    const { ctx } = this;
    yield ctx.render('mission/2.html');
  }
}

module.exports = MissionController;

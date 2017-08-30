'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var index = exports.index = async function index(ctx, next) {
  var title = 'koa2 title';

  await ctx.render('index', {
    title: title
  });
};

var start = exports.start = async function start(ctx, next) {
  var title = 'koa2 title';

  await ctx.render('game/start', {
    title: title
  });
};

var login = exports.login = async function login(ctx, next) {
  var title = 'koa2 title';

  await ctx.render('pages/login', {
    title: title
  });
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = async function (ctx, next) {
  var title = 'koa2 title';

  await ctx.render('index', {
    title: title
  });
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaViews = require('koa-views');

var _koaViews2 = _interopRequireDefault(_koaViews);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaJson = require('koa-json');

var _koaJson2 = _interopRequireDefault(_koaJson);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaStaticPlus = require('koa-static-plus');

var _koaStaticPlus2 = _interopRequireDefault(_koaStaticPlus);

var _koaOnerror = require('koa-onerror');

var _koaOnerror2 = _interopRequireDefault(_koaOnerror);

var _koaSession = require('koa-session');

var _koaSession2 = _interopRequireDefault(_koaSession);

var _koaGithub = require('koa-github');

var _koaGithub2 = _interopRequireDefault(_koaGithub);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _package = require('../package');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var bodyparser = (0, _koaBodyparser2.default)();

// middlewares
app.use((0, _koaConvert2.default)(bodyparser));
app.use((0, _koaConvert2.default)((0, _koaJson2.default)()));
app.use((0, _koaConvert2.default)((0, _koaLogger2.default)()));

// session
app.name = _package2.default.name;
app.keys = ['some secret hurr'];

var CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use((0, _koaSession2.default)(CONFIG, app));
app.use((0, _koaGithub2.default)({
  clientID: '3341ac341999dbc5e4c6',
  clientSecret: '7443d84b5310ddac1b3ae15262d3d692b311ae8f',
  callbackURL: 'http://localhost:3000/start',
  userKey: 'user',
  timeout: 10000
}));

// static
app.use((0, _koaConvert2.default)((0, _koaStaticPlus2.default)(_path2.default.join(__dirname, '../public'), {
  pathPrefix: ''
})));

app.use((0, _koaConvert2.default)( /*#__PURE__*/regeneratorRuntime.mark(function handler() {
  return regeneratorRuntime.wrap(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!this.session.githubToken) {
            this.body = '<a href="/github/auth">login with github</a>';
          } else {
            this.body = this.session.user;
          }

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, handler, this);
})));

// views
app.use((0, _koaViews2.default)(_path2.default.join(__dirname, '../views'), {
  extension: 'ejs'
}));

// 500 error
(0, _koaOnerror2.default)(app, {
  template: 'views/500.ejs'
});

// logger
app.use(async function (ctx, next) {
  var start = new Date();
  await next();
  var ms = new Date() - start;
  console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms');
});

// response router
app.use(async function (ctx, next) {
  await require('./routes').routes()(ctx, next);
});

// 404
app.use(async function (ctx) {
  ctx.status = 404;
  await ctx.render('404');
});

// error logger
app.on('error', async function (err, ctx) {
  console.log('error occured:', err);
});

var port = parseInt(_config2.default.port || '3000');
var server = _http2.default.createServer(app.callback());

server.listen(port);
server.on('error', function (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
server.on('listening', function () {
  console.log('Listening on port: %d', port);
});

exports.default = app;
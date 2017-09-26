'use strict';

module.exports = app => {
  app.passport.mount('github');
  app.get('/', 'home.index');
  app.get('/login', 'user.login');
  app.get('/logout', 'user.logout');

  require('./router/game.js')(app);
};

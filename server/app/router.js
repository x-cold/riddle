'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user', 'home.index');
  app.get('/logout', 'user.logout');

  app.passport.mount('github');

  require('./router/game.js')(app);
};

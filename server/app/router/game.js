'use strict';

module.exports = app => {
  app.get('/game/mission/1', app.controller.mission.first);
  app.get('/game/mission/second', app.controller.mission.second);
};

'use strict';

exports.static = true;

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

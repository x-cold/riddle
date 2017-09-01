'use strict';

exports.static = true;

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

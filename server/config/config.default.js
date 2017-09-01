'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504265217868_3033';

  // add your config here
  config.passportGithub = {
    key: '3341ac341999dbc5e4c6',
    secret: '7443d84b5310ddac1b3ae15262d3d692b311ae8f'
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/example',
    options: {}
  };
  return config;
};

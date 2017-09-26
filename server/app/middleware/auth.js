'use strict';

module.exports = options => {
  return function* auth(next) {
    const whiteList = /\/(login|passport\/)/;
    if (whiteList.test(this.path)) {
      yield next;
      return;
    }
    if (!this.isAuthenticated()) {
      return this.redirect('/login');
    }
    yield next;
  };
};

'use strict';

module.exports = app => {
  class User extends app.Service {
    * register(user) {
      const userModel = app.model.User;
      return userModel.create(user);
    }
  }
  return User;
};

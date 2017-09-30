'use strict';

const assert = require('assert');

module.exports = app => {
  app.passport.verify(function* (ctx, user) {
    // check user
    assert(user.provider, 'user.provider should exists');
    assert(user.id, 'user.id should exists');

    // find user from database
    //
    // Authorization Table
    // column   | desc
    // ---      | --
    // provider | provider name, like github, twitter, facebook, weibo and so on
    // uid      | provider unique id
    // user_id  | current application user id
    const existsUser = yield app.model.User.findOne({ userName: user.name });
    if (existsUser) {
      return existsUser;
    }

    const userInfo = {
      userName: user.name, // 用户名
      avatar: user.profile._json.avatar_url, // 个人头像
      email: user.profile._json.email, // 邮箱地址
      githubId: user.profile._json.id,
      githubUsername: user.displayName,
      githubAccessToken: user.accessToken,
    };

    const newUser = yield ctx.service.user.register(userInfo);
    return newUser;
  });
};

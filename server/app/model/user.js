'use strict';

const BaseModel = require('../utils/base_model');

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: { type: String }, // 用户名
    pass: { type: String }, // 密码
    avatar: { type: String }, // 个人头像
    email: { type: String }, // 邮箱地址
    create_at: { type: Date, default: Date.now }, // 创建时间
    update_at: { type: Date, default: Date.now }, // 修改时间
    score: { type: Number, default: 0 }, // 积分
    level: { type: String }, // 关卡
    active: { type: Boolean, default: true }, // 是否可用
    isBlock: { type: Boolean, default: false }, // 是否黑名单用户
    githubId: { type: String },
    githubUsername: { type: String },
    githubAccessToken: { type: String },
  });

  UserSchema.plugin(BaseModel);
  UserSchema.index({ userName: 1 }, { unique: true });
  UserSchema.index({ email: 1 }, { unique: true });
  UserSchema.index({ githubId: 1 });

  UserSchema.pre('save', function(next) {
    const now = new Date();
    this.update_at = now;
    next();
  });

  return mongoose.model('User', UserSchema);
};

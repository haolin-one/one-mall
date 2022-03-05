const md5password = require('../utils/password-handle');
const service = require('../service/user.service');
const errorTypes = require('../constants/error-types');

// 验证登录
const verifyLogin = async (ctx, next) => {
  const { account, password } = ctx.request.body;

  if (!account || !password) {
    const error = new Error(errorTypes.ACCOUNT_IS_NOT_NULL);
    return ctx.app.emit('error', error, ctx);
  }

  const isExist = await service.getUserByUsernamePhone(account);
  const userInfo = isExist[0];
  if (!isExist.length) {
    const error = new Error(errorTypes.ACCOUNT_IS_NOT_EXIST);
    return ctx.app.emit('error', error, ctx);
  }

  if (md5password(password) !== userInfo.password) {
    const error = new Error(errorTypes.PASSWORD_IS_NOT_TRUE);
    return ctx.app.emit('error', error, ctx);
  }

  await next();
};

// 验证注册
const verifyUser = async (ctx, next) => {
  const { username, password, phone } = ctx.request.body;

  if (!username || !password || !phone) {
    const error = new Error(errorTypes.USERNAME_PHONE_PASSWORD_IS_NOT_NULL);
    return ctx.app.emit('error', error, ctx);
  }

  const usernameExist = await service.getUserByUsername(username);
  if (usernameExist.length) {
    const error = new Error(errorTypes.USERNAME_IS_EXIST);
    return ctx.app.emit('error', error, ctx);
  }

  const phoneExist = await service.getUserByPhone(phone);
  if (phoneExist.length) {
    const error = new Error(errorTypes.PHONE_IS_EXIST);
    return ctx.app.emit('error', error, ctx);
  }

  await next();
};

// 密码加密
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);
  await next();
};

module.exports = {
  verifyLogin,
  verifyUser,
  handlePassword
};

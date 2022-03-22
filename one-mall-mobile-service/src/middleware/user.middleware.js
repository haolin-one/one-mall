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

// 验证修改
const verifyEditUser = async (ctx, next) => {
  const { username, phone, id } = ctx.request.body;

  const isNotChange = await service.getUserById(id);

  if (!username || !phone) {
    const error = new Error(errorTypes.USERNAME_PHONE_PASSWORD_IS_NOT_NULL);
    return ctx.app.emit('error', error, ctx);
  }

  const usernameExist = await service.getUserByUsername(username);
  if (usernameExist.length && isNotChange[0].username !== username) {
    const error = new Error(errorTypes.USERNAME_IS_EXIST);
    return ctx.app.emit('error', error, ctx);
  }

  const phoneExist = await service.getUserByPhone(phone);
  if (phoneExist.length && isNotChange[0].phone !== phone) {
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

// 验证原密码
const verifyEditPassword = async (ctx, next) => {
  const { id, oldPassword, newPassword } = ctx.request.body;
  const result = await service.getUserById(id);
  if (result[0].password === md5password(oldPassword)) {
    ctx.request.body.newPassword = md5password(newPassword);
    await next();
  } else {
    return (ctx.body = '原密码不正确!');
  }
};

// 验证用户名和手机号码
const verifyForgetPassword = async (ctx, next) => {
  const { username, phone } = ctx.request.body;
  const result = await service.getUserUP(username, phone);
  if (!result.length) {
    const error = new Error(errorTypes.USERNAME_OR_PHONE_IS_NOT_TRUE);
    return ctx.app.emit('error', error, ctx);
  }
  await next();
};

module.exports = {
  verifyLogin,
  verifyUser,
  handlePassword,
  verifyEditUser,
  verifyEditPassword,
  verifyForgetPassword
};

const errorTypes = require('../constants/error-types');

const errorHandler = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.USERNAME_PHONE_PASSWORD_IS_NOT_NULL:
      status = 400;
      message = '用户名/手机号码/密码不能为空!';
      break;
    case errorTypes.USERNAME_IS_EXIST:
      status = 409;
      message = '用户名已存在!';
      break;
    case errorTypes.PHONE_IS_EXIST:
      status = 409;
      message = '该号码已被绑定!';
      break;
    case errorTypes.ACCOUNT_IS_NOT_NULL:
      status = 400;
      message = '账号不能为空!';
      break;
    case errorTypes.ACCOUNT_IS_NOT_EXIST:
      status = 400;
      message = '账号不存在!';
      break;
    case errorTypes.PASSWORD_IS_NOT_TRUE:
      status = 400;
      message = '密码不正确!';
      break;
    case errorTypes.USERNAME_OR_PHONE_IS_NOT_TRUE:
      status = 400;
      message = '用户名或手机号码不正确!';
      break;
    case errorTypes.STOCK_IS_NOT_ENOUGH:
      status = 400;
      message = '库存不足~';
      break;
    default:
      status = 401;
      message = 'NOT FOUND';
  }
  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;

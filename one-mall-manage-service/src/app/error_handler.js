const errorTypes = require('../constants/error-types');

const errorHandler = (error, ctx) => {
  let message;
  switch (error.message) {
    case errorTypes.USERNAME_IS_NOT_NULL:
      message = '用户名不能为空';
      break;
    case errorTypes.USERNAME_IS_NOT_EXIST:
      message = '用户名不存在';
      break;
    case errorTypes.PASSWORD_IS_NOT_TRUE:
      message = '密码不正确';
      break;
  }
  ctx.body = { message, error: true };
};

module.exports = errorHandler;

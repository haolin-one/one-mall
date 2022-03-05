const router = require('koa-router');

const { login, register } = require('../controller/user.controller');
const {
  verifyLogin,
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new router({ prefix: '/user' });

userRouter.post('/', verifyLogin, login);
userRouter.post('/register', verifyUser, handlePassword, register);

module.exports = userRouter;

const router = require('koa-router');

const {
  login,
  register,
  getAddress
} = require('../controller/user.controller');
const {
  verifyLogin,
  verifyUser,
  handlePassword
} = require('../middleware/user.middleware');

const userRouter = new router({ prefix: '/user' });

userRouter.post('/', verifyLogin, login);
userRouter.post('/register', verifyUser, handlePassword, register);
userRouter.post('/:id', getAddress);

module.exports = userRouter;

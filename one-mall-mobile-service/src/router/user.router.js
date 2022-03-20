const router = require('koa-router');

const {
  login,
  register,
  getAddress,
  editUserInfo
} = require('../controller/user.controller');
const {
  verifyLogin,
  verifyUser,
  handlePassword,
  verifyEditUser
} = require('../middleware/user.middleware');

const userRouter = new router({ prefix: '/user' });

userRouter.post('/', verifyLogin, login);
userRouter.post('/register', verifyUser, handlePassword, register);
userRouter.post('/editUserInfo', verifyEditUser, editUserInfo);
userRouter.post('/:id', getAddress);

module.exports = userRouter;

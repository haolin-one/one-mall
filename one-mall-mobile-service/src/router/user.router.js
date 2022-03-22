const router = require('koa-router');

const {
  login,
  register,
  getAddress,
  editUserInfo,
  editPassword,
  forgetPassword
} = require('../controller/user.controller');
const {
  verifyLogin,
  verifyUser,
  handlePassword,
  verifyEditUser,
  verifyEditPassword,
  verifyForgetPassword
} = require('../middleware/user.middleware');

const userRouter = new router({ prefix: '/user' });

userRouter.post('/', verifyLogin, login);
userRouter.post('/register', verifyUser, handlePassword, register);
userRouter.post('/editUserInfo', verifyEditUser, editUserInfo);
userRouter.get('/:id', getAddress);
userRouter.post('/editPassword', verifyEditPassword, editPassword);
userRouter.post(
  '/forgetPassword',
  verifyForgetPassword,
  handlePassword,
  forgetPassword
);

module.exports = userRouter;

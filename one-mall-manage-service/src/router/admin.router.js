const Router = require('koa-router');

const {
  getAdminList,
  updateAdmin,
  createAdmin,
  deleteAdmin,
  login
} = require('../controller/admin.controller');
const { verifyLogin } = require('../middleware/admin.middleware');

const adminRouter = new Router({ prefix: '/admin' });

adminRouter.post('/login', verifyLogin, login);
adminRouter.post('/list', getAdminList);
adminRouter.post('/', createAdmin);
adminRouter.patch('/:id', updateAdmin);
adminRouter.delete('/:id', deleteAdmin);

module.exports = adminRouter;

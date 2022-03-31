const Router = require('koa-router');

const {
  getAdminList,
  updateAdmin,
  createAdmin,
  deleteAdmin
} = require('../controller/admin.controller');

const adminRouter = new Router({ prefix: '/admin' });

adminRouter.post('/list', getAdminList);
adminRouter.post('/', createAdmin);
adminRouter.patch('/:id', updateAdmin);
adminRouter.delete('/:id', deleteAdmin);

module.exports = adminRouter;

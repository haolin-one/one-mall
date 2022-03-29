const Router = require('koa-router');

const { getAdminList, updateAdmin } = require('../controller/admin.controller');

const adminRouter = new Router({ prefix: '/admin' });

adminRouter.post('/list', getAdminList);
adminRouter.patch('/:id', updateAdmin);

module.exports = adminRouter;

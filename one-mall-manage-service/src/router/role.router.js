const Router = require('koa-router');

const { getRoleList } = require('../controller/role.controller');

const roleRouter = new Router({ prefix: '/role' });

roleRouter.post('/list', getRoleList);

module.exports = roleRouter;

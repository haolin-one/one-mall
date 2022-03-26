const Router = require('koa-router');

const { getMenusById } = require('../controller/menu.controller');

const menuRouter = new Router({ prefix: '/menu' });

menuRouter.get('/:id', getMenusById);

module.exports = menuRouter;

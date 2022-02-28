const Router = require('koa-router');

const { qSearch } = require('../controller/goods.controller');

const goodsRouter = new Router({ prefix: '/goods' });

goodsRouter.get('/qsearch/:queryInfo', qSearch);

module.exports = goodsRouter;

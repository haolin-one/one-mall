const Router = require('koa-router');

const { getGoodsList } = require('../controller/goods.controller');

const goodsListRouter = new Router({ prefix: '/goods' });

goodsListRouter.post('/list', getGoodsList);

module.exports = goodsListRouter;

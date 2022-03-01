const Router = require('koa-router');

const { qSearch, goodsDetail } = require('../controller/goods.controller');

const goodsRouter = new Router({ prefix: '/goods' });

goodsRouter.get('/qsearch/:queryInfo', qSearch);
goodsRouter.get('/:id', goodsDetail);

module.exports = goodsRouter;

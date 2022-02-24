const router = require('koa-router');

const { getGoodsCate } = require('../controller/goodsCate.controller.js');

const goodsCateRouter = new router({ prefix: '/goodsCate' });

goodsCateRouter.get('/', getGoodsCate);

module.exports = goodsCateRouter;

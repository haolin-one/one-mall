const router = require('koa-router');

const {
  getGoodsParentCate,
  getGoodsChildCate
} = require('../controller/goodsCate.controller.js');

const goodsCateRouter = new router({ prefix: '/goodsCate' });

goodsCateRouter.get('/', getGoodsParentCate);
goodsCateRouter.get('/:parentId', getGoodsChildCate);

module.exports = goodsCateRouter;

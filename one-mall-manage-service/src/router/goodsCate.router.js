const Router = require('koa-router');

const {
  getGoodsCateList,
  updateGoodsCate,
  createGoodsCate,
  deleteGoodsCate
} = require('../controller/goodsCate.controller');

const goodsCateRouter = new Router({ prefix: '/goodsCate' });

goodsCateRouter.post('/list', getGoodsCateList);
goodsCateRouter.patch('/:id', updateGoodsCate);
goodsCateRouter.post('/', createGoodsCate);
goodsCateRouter.delete('/:id', deleteGoodsCate);

module.exports = goodsCateRouter;

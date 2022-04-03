const Router = require('koa-router');

const {
  getGoodsList,
  updateGoodsList,
  createGoodsList,
  deleteGoodsList
} = require('../controller/goods.controller');

const goodsListRouter = new Router({ prefix: '/goods' });

goodsListRouter.post('/list', getGoodsList);
goodsListRouter.post('/', createGoodsList);
goodsListRouter.patch('/:id', updateGoodsList);
goodsListRouter.delete('/:id', deleteGoodsList);

module.exports = goodsListRouter;

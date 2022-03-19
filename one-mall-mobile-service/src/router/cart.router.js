const Router = require('koa-router');

const {
  getCart,
  addCart,
  updateCart
} = require('../controller/cart.controller');

const cartRouter = new Router({ prefix: '/cart' });

cartRouter.get('/:id', getCart);
cartRouter.post('/addGoods', addCart);
cartRouter.post('/addSameGoods', updateCart);

module.exports = cartRouter;

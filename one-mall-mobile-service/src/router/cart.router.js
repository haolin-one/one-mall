const Router = require('koa-router');

const { getCart } = require('../controller/cart.controller');

const cartRouter = new Router({ prefix: '/cart' });

cartRouter.post('/:id', getCart);

module.exports = cartRouter;

const Router = require('koa-router');

const { getCart, addCart } = require('../controller/cart.controller');

const cartRouter = new Router({ prefix: '/cart' });

cartRouter.post('/:id', getCart);
cartRouter.post('/', addCart);

module.exports = cartRouter;

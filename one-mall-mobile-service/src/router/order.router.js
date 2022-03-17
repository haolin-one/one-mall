const router = require('koa-router');

const { getOrder, addOrder } = require('../controller/order.controller');

const orderRouter = new router({ prefix: '/order' });

orderRouter.get('/', getOrder);
orderRouter.post('/', addOrder);

module.exports = orderRouter;

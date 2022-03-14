const router = require('koa-router');

const { getOrder } = require('../controller/order.controller');

const orderRouter = new router({ prefix: '/order' });

orderRouter.get('/', getOrder);

module.exports = orderRouter;

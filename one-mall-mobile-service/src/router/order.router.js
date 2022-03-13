const router = require('koa-router');

const { getOrder } = require('../controller/order.controller');

const orderRouter = new router({ prefix: '/order' });

orderRouter.get('/:user_id', getOrder);

module.exports = orderRouter;

const router = require('koa-router');

const {
  getOrder,
  addOrder,
  updateAddress
} = require('../controller/order.controller');

const orderRouter = new router({ prefix: '/order' });

orderRouter.get('/', getOrder);
orderRouter.post('/', addOrder);
orderRouter.post('/updateAddress', updateAddress);

module.exports = orderRouter;

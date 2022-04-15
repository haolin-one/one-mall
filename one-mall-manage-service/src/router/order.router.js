const Router = require('koa-router');

const {
  getOrderList,
  updateOrder,
  deleteOrder,
  getOrderDetail
} = require('../controller/order.controller');

const orderRouter = new Router({ prefix: '/order' });

orderRouter.post('/list', getOrderList);
orderRouter.patch('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder);
orderRouter.post('/orderDetail/:order_sn', getOrderDetail);

module.exports = orderRouter;

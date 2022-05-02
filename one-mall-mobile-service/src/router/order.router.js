const router = require('koa-router');

const {
  getOrder,
  addOrder,
  updateAddress,
  confirmReceive,
  confirmComment
} = require('../controller/order.controller');

const { verifyStock } = require('../middleware/order.middleware');

const orderRouter = new router({ prefix: '/order' });

orderRouter.get('/', getOrder);
orderRouter.post('/', verifyStock, addOrder);
orderRouter.post('/updateAddress', updateAddress);
orderRouter.post('/confirmReceive', confirmReceive);
orderRouter.post('/confirmComment', confirmComment);

module.exports = orderRouter;

const service = require('../service/order.service');

class orderController {
  async getOrder(ctx) {
    const { userId, status } = ctx.query;
    const result = await service.getOrder(userId, status);
    ctx.body = result;
  }
  async addOrder(ctx) {
    const orderInfo = ctx.request.body;
    await service.addOrder(orderInfo);
    ctx.body = '提交订单成功';
  }
}

module.exports = new orderController();

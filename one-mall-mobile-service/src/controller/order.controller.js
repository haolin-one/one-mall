const service = require('../service/order.service');

class orderController {
  async getOrder(ctx) {
    const { userId, status } = ctx.query;
    const result = await service.getOrder(userId, status);
    ctx.body = result;
  }
}

module.exports = new orderController();

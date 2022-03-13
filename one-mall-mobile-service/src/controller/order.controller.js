const service = require('../service/order.service');

class orderController {
  async getOrder(ctx) {
    const { user_id } = ctx.params;
    const result = await service.getOrder(user_id);
    ctx.body = result;
  }
}

module.exports = new orderController();

const service = require('../service/order.service');

class orderController {
  async getOrder(ctx) {
    const result = await service.getOrder(ctx.query);
    ctx.body = result;
  }
  async addOrder(ctx) {
    const orderInfo = ctx.request.body;
    await service.addOrder(orderInfo);
    ctx.body = '提交订单成功~';
  }
  async updateAddress(ctx) {
    await service.updateAddress(ctx.request.body);
    ctx.body = '修改地址成功~';
  }
}

module.exports = new orderController();

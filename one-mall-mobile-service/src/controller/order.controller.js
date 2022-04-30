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
  async confirmReceive(ctx) {
    const { id } = ctx.request.body;
    await service.confirmReceive(id);
    ctx.body = '收货成功~';
  }
  async confirmComment(ctx) {
    await service.confirmComment(ctx.request.body);
    ctx.body = '评价已完成~';
  }
}

module.exports = new orderController();

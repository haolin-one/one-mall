const service = require('../service/order.service');

class orderController {
  async getOrderList(ctx) {
    const result = await service.getOrderList(ctx.request.body);
    ctx.body = result;
  }

  async updateOrder(ctx) {
    const { id } = ctx.params;
    await service.updateOrder(id, ctx.request.body);
    ctx.body = `修改成功~`;
  }

  async deleteOrder(ctx) {
    const { id } = ctx.params;
    await service.deleteOrder(id);
    ctx.body = `删除成功~`;
  }

  async getOrderDetail(ctx) {
    const { order_sn } = ctx.params;
    const result = await service.getOrderDetail(order_sn);
    ctx.body = result;
  }
}

module.exports = new orderController();

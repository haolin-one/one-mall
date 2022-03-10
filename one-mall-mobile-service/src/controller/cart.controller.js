const service = require('../service/cart.service');

class cartController {
  async getCart(ctx) {
    const { id } = ctx.params;
    const result = await service.getCart(id);
    ctx.body = result;
  }
}

module.exports = new cartController();

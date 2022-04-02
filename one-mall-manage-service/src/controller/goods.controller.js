const service = require('../service/goods.service');

class goodsController {
  async getGoodsList(ctx) {
    const { name, offset, size } = ctx.request.body;
    const result = await service.getGoodsList(name, offset, size);
    ctx.body = result;
  }
}

module.exports = new goodsController();

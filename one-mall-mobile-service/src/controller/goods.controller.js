const service = require('../service/goods.service');

class GoodsController {
  async qSearch(ctx) {
    const { queryInfo } = ctx.params;
    const result = await service.qSearch(queryInfo);
    ctx.body = result;
  }
}

module.exports = new GoodsController();

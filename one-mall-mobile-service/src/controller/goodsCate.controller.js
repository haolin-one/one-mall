const service = require('../service/goodsCate.service');

class GoodsCateController {
  async getGoodsCate(ctx) {
    const result = await service.getGoodsCate();
    ctx.body = result;
  }
}

module.exports = new GoodsCateController();

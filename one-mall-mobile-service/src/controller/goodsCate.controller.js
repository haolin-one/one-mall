const service = require('../service/goodsCate.service');

class GoodsCateController {
  async getGoodsParentCate(ctx) {
    const result = await service.getGoodsParentCate();
    ctx.body = result;
  }

  async getGoodsChildCate(ctx) {
    const { parentId } = ctx.params;
    const result = await service.getGoodsChildCate(parentId);
    ctx.body = result;
  }
}

module.exports = new GoodsCateController();

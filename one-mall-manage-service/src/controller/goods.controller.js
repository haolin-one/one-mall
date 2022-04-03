const service = require('../service/goods.service');

class goodsController {
  async getGoodsList(ctx) {
    const { name, offset, size } = ctx.request.body;
    const result = await service.getGoodsList(name, offset, size);
    ctx.body = result;
  }
  async updateGoodsList(ctx) {
    const { id } = ctx.params;
    await service.updateGoodsList(id, ctx.request.body);
    ctx.body = '修改成功~';
  }
  async createGoodsList(ctx) {
    await service.createGoodsList(ctx.request.body);
    ctx.body = '添加成功~';
  }
  async deleteGoodsList(ctx) {
    const { id } = ctx.params;
    await service.deleteGoodsList(id);
    ctx.body = `删除成功~`;
  }
}

module.exports = new goodsController();

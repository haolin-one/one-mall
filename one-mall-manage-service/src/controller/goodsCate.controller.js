const service = require('../service/goodsCate.service');

class goodsCateController {
  async getGoodsCateList(ctx) {
    const result = await service.getGoodsCateList(ctx.request.body);
    ctx.body = result;
  }

  async updateGoodsCate(ctx) {
    const { id } = ctx.params;
    const { name } = ctx.request.body;
    await service.updateGoodsCate(id, name);
    ctx.body = `修改成功~`;
  }

  async createGoodsCate(ctx) {
    const { name } = ctx.request.body;
    await service.createGoodsCate(name);
    ctx.body = `添加成功~`;
  }

  async deleteGoodsCate(ctx) {
    const { id } = ctx.params;
    await service.deleteGoodsCate(id);
    ctx.body = `删除成功~`;
  }
}

module.exports = new goodsCateController();

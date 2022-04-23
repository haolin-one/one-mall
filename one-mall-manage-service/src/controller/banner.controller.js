const service = require('../service/banner.service');

class bannerController {
  async getBannerList(ctx) {
    const result = await service.getBannerList(ctx.request.body);
    ctx.body = result;
  }

  async updateBannerList(ctx) {
    const { id } = ctx.params;
    await service.updateBannerList(id, ctx.request.body);
    ctx.body = '修改成功~';
  }

  async deleteBannerList(ctx) {
    const { id } = ctx.params;
    await service.deleteBannerList(id);
    ctx.body = '删除成功~';
  }

  async createBannerList(ctx) {
    await service.createBannerList(ctx.request.body);
    ctx.body = '添加成功~';
  }
}

module.exports = new bannerController();

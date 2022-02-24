const service = require('../service/banner.service');

class BannerController {
  async getBanner(ctx) {
    const result = await service.getBanner()
    ctx.body = result;
  }
}

module.exports = new BannerController();

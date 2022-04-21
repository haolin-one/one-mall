const service = require('../service/home.service');

class HomeController {
  async getBanner(ctx) {
    const result = await service.getBanner();
    ctx.body = result;
  }
  async getRecommend(ctx) {
    const result = await service.getRecommend();
    ctx.body = result;
  }
}

module.exports = new HomeController();

const service = require('../service/menu.service');

class menuController {
  async getMenusById(ctx) {
    const { id } = ctx.params;
    const result = await service.getMenusById(id);
    ctx.body = result;
  }
}

module.exports = new menuController();

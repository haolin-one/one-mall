const service = require('../service/admin.service');

class adminController {
  async getAdminList(ctx) {
    const result = await service.getAdminList(ctx.request.body);
    ctx.body = result;
  }
  async updateAdmin(ctx) {
    const { id } = ctx.params;
    await service.updateAdmin(id, ctx.request.body);
    ctx.body = `修改成功~`;
  }
}

module.exports = new adminController();

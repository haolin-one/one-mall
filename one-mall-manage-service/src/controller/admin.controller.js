const service = require('../service/admin.service');

class adminController {
  async getAdminList(ctx) {
    const result = await service.getAdminList(ctx.request.body);
    ctx.body = result;
  }
  async createAdmin(ctx) {
    await service.createAdmin(ctx.request.body);
    ctx.body = `添加成功~`;
  }
  async updateAdmin(ctx) {
    const { id } = ctx.params;
    await service.updateAdmin(id, ctx.request.body);
    ctx.body = `修改成功~`;
  }
  async deleteAdmin(ctx) {
    const { id } = ctx.params;
    await service.deleteAdmin(id);
    ctx.body = `删除成功~`;
  }
}

module.exports = new adminController();

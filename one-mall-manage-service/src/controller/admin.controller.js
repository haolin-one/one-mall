const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');
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

  async login(ctx) {
    const { id, name } = ctx.user;
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256'
    });
    ctx.body = { id, token };
  }

  async getAdminInfoById(ctx) {
    const { id } = ctx.params;
    const result = await service.getAdminInfoById(id);
    ctx.body = result;
  }
}

module.exports = new adminController();

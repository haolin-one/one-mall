const service = require('../service/role.service');

class roleController {
  async getRoleList(ctx) {
    const result = await service.getRoleList(ctx.request.body);
    ctx.body = result;
  }
}

module.exports = new roleController();

const service = require('../service/user.service');

class userController {
  async login(ctx) {
    const { account, password } = ctx.request.body;
    const result = await service.login(account, password);
    ctx.body = result;
  }

  register(ctx) {
    const userInfo = ctx.request.body;
    service.register(userInfo);
    ctx.body = '注册成功~';
  }

  async getAddress(ctx) {
    const { id } = ctx.params;
    const result = await service.getAddress(id);
    ctx.body = result;
  }

  async editUserInfo(ctx) {
    await service.editUserInfo(ctx.request.body);
    ctx.body = '修改成功~';
  }

  async editPassword(ctx) {
    await service.editPassword(ctx.request.body);
    ctx.body = '修改成功~';
  }

  async forgetPassword(ctx) {
    await service.forgetPassword(ctx.request.body);
    ctx.body = '设置成功~';
  }
}

module.exports = new userController();

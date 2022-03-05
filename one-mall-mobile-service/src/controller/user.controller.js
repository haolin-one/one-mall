const service = require('../service/user.service');

class userController {
  login(ctx) {
    ctx.body = '登录成功~';
  }
  register(ctx) {
    const userInfo = ctx.request.body;
    const result = service.register(userInfo);
    ctx.body = '注册成功~';
  }
}

module.exports = new userController();

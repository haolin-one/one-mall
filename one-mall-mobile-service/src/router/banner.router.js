const router = require('koa-router');

const { getBanner } = require('../controller/banner.controller.js');

const bannerRouter = new router({ prefix: '/banner' });

bannerRouter.get('/', getBanner);

module.exports = bannerRouter;

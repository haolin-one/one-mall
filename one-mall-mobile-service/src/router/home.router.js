const router = require('koa-router');

const { getBanner, getRecommend } = require('../controller/home.controller.js');

const homeRouter = new router({ prefix: '/home' });

homeRouter.get('/banner', getBanner);
homeRouter.get('/recommend', getRecommend);

module.exports = homeRouter;

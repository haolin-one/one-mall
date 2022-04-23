const Router = require('koa-router');

const {
  getBannerList,
  updateBannerList,
  deleteBannerList,
  createBannerList
} = require('../controller/banner.controller');

const bannerRouter = new Router({ prefix: '/banner' });

bannerRouter.post('/list', getBannerList);
bannerRouter.patch('/:id', updateBannerList);
bannerRouter.delete('/:id', deleteBannerList);
bannerRouter.post('/', createBannerList);

module.exports = bannerRouter;

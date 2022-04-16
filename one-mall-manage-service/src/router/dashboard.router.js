const Router = require('koa-router');

const {
  getCitySale,
  getCateSale
} = require('../controller/dashboard.controller');

const dashboardRouter = new Router({ prefix: '/dashboard' });

dashboardRouter.get('/getCitySale', getCitySale);
dashboardRouter.get('/getCateSale', getCateSale);

module.exports = dashboardRouter;

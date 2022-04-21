const Router = require('koa-router');

const {
  getCitySale,
  getCateSale,
  getMonthSale
} = require('../controller/dashboard.controller');

const dashboardRouter = new Router({ prefix: '/dashboard' });

dashboardRouter.get('/getCitySale', getCitySale);
dashboardRouter.get('/getCateSale', getCateSale);
dashboardRouter.get('/getMonthSale', getMonthSale);

module.exports = dashboardRouter;

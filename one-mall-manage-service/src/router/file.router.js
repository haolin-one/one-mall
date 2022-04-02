const Router = require('koa-router');

// const {} = require('../controller/file.controller');

const fileRouter = new Router({ prefix: '/upload' });

fileRouter.post('/avatar');

module.exports = fileRouter;

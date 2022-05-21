const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koa2Core = require('koa2-cors');

const useRoutes = require('../router');
const errorHandler = require('./error_handler');

const app = new Koa();

app.use(bodyParser());
app.use(koa2Core());
useRoutes(app);

app.on('error', errorHandler);

module.exports = app;

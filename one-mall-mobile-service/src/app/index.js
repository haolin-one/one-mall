const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');

const useRoutes = require('../router');
const errorHandler = require('./error-handler');

const app = new Koa();

app.use(bodyParser());
useRoutes(app);

app.on('error', errorHandler);

const staticPath = path.resolve(__dirname, '../static');
app.use(koaStatic(staticPath));

module.exports = app;

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const path = require('path');
const useRoutes = require('../router');

const app = new Koa();

app.use(bodyParser());
useRoutes(app);

const staticPath = path.resolve(__dirname, '../static');
app.use(koaStatic(staticPath));

module.exports = app;

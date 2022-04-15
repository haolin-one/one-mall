const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koa2Core = require('koa2-cors');

const useRoutes = require('../router');

const app = new Koa();

app.use(bodyParser());
app.use(koa2Core());
useRoutes(app);

module.exports = app;

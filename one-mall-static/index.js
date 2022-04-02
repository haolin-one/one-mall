const Koa = require("koa");
const koaStatic = require("koa-static");
const path = require("path");

const app = new Koa();

const staticPath = path.resolve(__dirname, "./public/images");
console.log(staticPath);
app.use(koaStatic(staticPath));

app.listen("8000");

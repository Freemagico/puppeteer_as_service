const Koa = require('koa');
const router = require('./router');

const app = new Koa();
app.proxy = true;

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, null);
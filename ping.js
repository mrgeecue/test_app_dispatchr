const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const test = require('./test.json');
const fs = require('fs');

const app = new Koa();

app.use(bodyParser());

router.get('/ping', async (ctx, next) => {
  console.log('server running');
  ctx.body = test
  await next ();
});

router.post('/ping', async (ctx, next) => {
  const data = JSON.stringify(ctx.request.body);
  console.log("DATA ---->", ctx.request.body);
  fs.writeFile('test3.json', data);
  await next ();
});

app.use(router.routes());

module.exports = app;

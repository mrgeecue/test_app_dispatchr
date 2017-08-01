const Koa = require('koa');
const router = require('koa-router')();
const mount = require('koa-mount');
const port = 8000;
const data = require('./test.json')
const cors = require('kcors');
// const router = require('router');

const app = new Koa();

app.use(cors());

app.use(mount(require('./ping.js')));

router.get('/ping', function(req, res){
  res.body = data;
});

app.listen(port, function(){
  console.log("Server running on port " + port)
});

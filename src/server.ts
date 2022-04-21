import * as Koa from 'koa';
import * as Router from 'koa-router';
import bodyParser = require('koa-bodyparser');
import { calculeFacture, sayHello } from './calc';

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get('/*', async (ctx) => {
  ctx.body = sayHello();
});

router.post('/feedback', async (ctx) => {
  console.log('Feedback received', ctx.request.body);
});

router.post('/order', async (ctx) => {
  console.log('Order received', ctx.request.body);

  if (ctx.request.body.reduction === 'STANDARD') {
    try {
      ctx.body = calculeFacture(ctx.request.body);
    } catch (e) {
      ctx.status = 400;
      ctx.body = {};
    }
  } else {
    console.error('La réduction est pas STANDARD !!!!!!!!', ctx.request.body.reduction);
    ctx.body = {};
  }
  console.log('Order processed', ctx.body);
});

app.use(router.routes());

const port = process.env.PORT || '8080';
app.listen(port);

console.log(`Server running on port ${port}`);

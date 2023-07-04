const Koa = require("koa");
const app = new Koa();

/* 
洋葱模型

1 before next
2 before next
3 before next
3 after next
2 after next
1 after next
*/
app.use(async (ctx, next) => {
  console.log("1 before next");
  await next();
  console.log("1 after next");
});

app.use(async (ctx, next) => {
  console.log("2 before next");
  await next();
  console.log("2 after next");
});

app.use(async (ctx, next) => {
  console.log("3 before next");
  await next();
  console.log("3 after next");
});

app.listen(4000, () => {
  console.log("server is stating in 4000");
});

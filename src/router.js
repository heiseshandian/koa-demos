const Koa = require("koa");
const app = new Koa();

// 手写实现router功能
app.use(async (ctx) => {
  const url = ctx.req.url;
  switch (url) {
    case "/home":
      ctx.body = "home";
      break;
    case "/preview":
      ctx.body = "home";
      break;
    default:
      ctx.body = "not found";
  }
});

app.listen(4000, () => {
  console.log("server is stating in 4000");
});

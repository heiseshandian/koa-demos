const Koa = require("koa");
const path = require("path");
const views = require("@ladjs/koa-views");
const app = new Koa();

// 加载模版引擎
app.use(
  views(path.join(__dirname, "./views"), {
    extension: "ejs",
  })
);

app.use(async (ctx) => {
  const title = "koa";

  await ctx.render("index", {
    title,
  });
});

app.listen(4000, () => {
  console.log("server is stating in 4000");
});

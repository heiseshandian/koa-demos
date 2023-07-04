const Koa = require("koa");
const app = new Koa();
const path = require("path");
const fs = require("fs");

const mimeMaps = {
  png: "image/png",
  css: "text/css",
  html: "text/html",
};

function parseMimeType(url) {
  const ext = path.extname(url).slice(1);
  return mimeMaps[ext] || "unknown";
}

const staticPath = path.join(__dirname, "../public");

// 手写实现简单的静态资源服务器
app.use(async (ctx) => {
  const content = fs.readFileSync(path.join(staticPath, ctx.req.url), "binary");
  const mime = parseMimeType(ctx.req.url);

  if (mime) {
    ctx.type = mime;
  }

  // 图片资源需要以二进制的形式写入，不能以文本形式写入
  if (mime && mime.indexOf("image/") != -1) {
    ctx.res.writeHead(200);
    ctx.res.write(content, "binary");
    ctx.res.end();
  } else {
    ctx.body = content;
  }
});

app.listen(4000, () => {
  console.log("server is stating in 4000");
});

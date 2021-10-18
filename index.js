const Koa = require("koa");
const serve = require("koa-static");
const mount = require("koa-mount");
const path = require("path");
const fs = require("fs");
const { capitalize } = require("./lib/util");

const PORT = process.env.port || 3000;

const app = new Koa();
const soundPath = path.join(__dirname, "/static/sounds");

app.use(mount("/sounds", serve(soundPath)));

const dataServer = new Koa();

async function getSounds(ctx) {
  const paths = await fs.readdirSync(soundPath);
  ctx.body = paths.map((path) => {
    return {
      name: path.replace(".wav", "").split("-").map(capitalize).join(" "),
      path: `/sounds/${path}`,
    };
  });
}

dataServer.use(getSounds);

app.use(mount("/meta", dataServer));

app.use(serve("public", { extensions: true }));

app.listen(3000);
console.log(`Listening on port ${PORT}`);

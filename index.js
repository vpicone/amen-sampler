const Koa = require("koa");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require("@koa/cors");
const path = require("path");
const fs = require("fs");
const { capitalize, keys } = require("./lib/util");

const PORT = process.env.port || 8000;

const app = new Koa();
app.use(cors());

const soundPath = path.join(__dirname, "/static/sounds");
app.use(mount("/sounds", serve(soundPath)));

const dataServer = new Koa();
async function getSounds(ctx) {
  const paths = await fs.readdirSync(soundPath);
  ctx.body = paths.map((path, i) => {
    return {
      name: path.replace(".wav", "").split("-").map(capitalize).join(" "),
      path: `/sounds/${path}`,
      key: keys[i],
    };
  });
}
dataServer.use(getSounds);
app.use(mount("/data", dataServer));

app.use(serve("public", { extensions: true }));

app.listen(PORT);
console.log(`Listening on port ${PORT}`);

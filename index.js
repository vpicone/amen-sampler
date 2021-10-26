const Koa = require("koa");
const compress = require("koa-compress");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require("@koa/cors");
const path = require("path");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = new Koa();
app.use(cors());

app.use(
  compress({
    gzip: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    deflate: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
    br: {
      flush: require("zlib").constants.Z_SYNC_FLUSH,
    },
  })
);

const soundPath = path.join(__dirname, "/static/sounds");
app.use(mount("/sounds", serve(soundPath)));

const dataServer = new Koa();
async function getSounds(ctx) {
  const samples = await prisma.sample.findMany();
  ctx.body = samples;
}
dataServer.use(getSounds);
app.use(mount("/data", dataServer));

app.use(serve("public", { extensions: true }));

app.listen(process.env.PORT || 8000);
console.log(`Listening on port ${process.env.PORT || 8000}`);

import express from "express";
import next from "next";
import bodyParser from "body-parser";
// import csrf from "csurf";
import helmet from "helmet";
import compression from "compression";
import getConfig from "next/config";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/api";

const __ENVIRONMENT__ = false; // production mode
// const __ENVIRONMENT__ = process.env.NODE_ENV !== "production";

// dir: for defining root nextjs pages folder
const app = next({ dev: __ENVIRONMENT__});

// handler: for handling nextjs get pages
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();


  // getting next.config.js configuration items
  const { serverRuntimeConfig } = getConfig();

  //Used for signed and unsigned cookie value between server and client
  const { PORT, COOKIE_SECRET } = serverRuntimeConfig;

  server.use(bodyParser.json({limit: '100mb', extended: true}))
  server.use( bodyParser.urlencoded({ extended: false }));
  server.use( cookieParser(COOKIE_SECRET));
  server.use( helmet());
  server.use( compression());

  server.use(apiRoutes);

  //Handling client side routes comes from NextJS
  server.get("*", (req, res) => handle(req, res));

  server.listen(parseInt(PORT, 10) || 3000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${parseInt(PORT, 10) || 3000}`);
  });
});

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");

require("./db.js");

const server = express();

server.name = "API";
server.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3001"
    // "https://localhost:3000"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use("/callback", (req, res) => {
  // res.send(req.body.topic);
  res.send(req.body);
  console.log(req.body);
});
server.use("/", routes);

// let code;
server.use("/", (req, res) => {
  res.send(req.query);
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = { server };

import "dotenv/config";

import express from "express";
import morgan from "morgan";

import { errorHandler } from "./middlewares/error.middleware.js";

import db from "./database/index.js";

const { APP_PORT } = process.env;

await db.sequelize.authenticate();

// TODO enlever quand on passe en PROD!!!
await db.sequelize.sync({ alter: true });

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// TODO routing

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Web API available at http://localhost:${APP_PORT}`);
});

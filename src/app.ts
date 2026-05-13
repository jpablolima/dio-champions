import express, { Request, Response, json } from "express";
import { getPlayer } from "./controllers/players-controller";
import router from "./routes/routes";

function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/", router);

  return app;
}

export default createApp();


import { allow_cors } from "@server/middlewares";
import express from "express";
import body_parser from "body-parser";

const DEFAULT_HTTP_PORT = 5000;

const app = express();


(async () => {

  app.use(allow_cors());
  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended: true }));

  app.use("/api/v1", require("./routes").default);

  const http_port = DEFAULT_HTTP_PORT;

  app.listen(http_port, () => {
    console.log(`Ready on http://localhost:${http_port}`);
  });
})();

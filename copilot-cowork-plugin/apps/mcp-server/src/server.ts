import express, { json } from "express";
import { jsonRpcHandler, JsonRpcRequest } from "./utils/jsonRpc";
import { env } from "./config/env";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";

export function createServer() {
  const app = express();
  app.use(json());
  app.use(logger);

  app.post("/api/mcp", async (req, res, next) => {
    try {
      const rpcRequest = req.body as JsonRpcRequest;
      const result = await jsonRpcHandler(rpcRequest, env.OPENAI_API_KEY);
      res.json(result);
    } catch (error) {
      next(error);
    }
  });

  app.use(errorHandler);
  return app;
}

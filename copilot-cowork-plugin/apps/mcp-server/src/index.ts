import { createServer } from "./server";
import { env } from "./config/env";

const app = createServer();

app.listen(env.PORT, () => {
  console.log(`MCP server listening on http://localhost:${env.PORT}`);
});

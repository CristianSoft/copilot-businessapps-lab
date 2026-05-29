# Deployment

The MCP server can be deployed to any Node.js-friendly hosting environment such as Azure App Service, Azure Container Apps, or Kubernetes.

Recommended deployment steps:

1. Build the server package:
```bash
pnpm build
```

2. Publish `apps/mcp-server/dist` and related runtime files.

3. Update `manifest.json` to point the `mcp` endpoint to the production URL.

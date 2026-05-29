# Local Development

1. Install dependencies:
```bash
pnpm install
```

2. Copy environment placeholders:
```bash
cp .env.example .env
cp apps/mcp-server/.env.example apps/mcp-server/.env
```

3. Start the MCP server:
```bash
pnpm dev:mcp-server
```

4. Validate the plugin manifest:
```bash
pnpm validate-manifest
```

5. Package the plugin for distribution:
```bash
pnpm package-plugin
```

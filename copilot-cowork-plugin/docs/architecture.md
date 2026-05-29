# Architecture

This starter template is designed for enterprise Copilot cowork plugins.

- `manifest.json`: declares plugin metadata, icons, endpoints, and permissions.
- `skills/`: houses Copilot skill definitions, companion references, and extensible assets.
- `apps/mcp-server/`: provides an Express-based JSON-RPC MCP server.
- `scripts/`: includes validation, packaging, and icon utility scripts.

The MCP server implements a JSON-RPC 2.0 endpoint at `/api/mcp` and can be extended with additional contract and legal tools.

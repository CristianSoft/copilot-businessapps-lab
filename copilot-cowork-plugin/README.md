# Copilot Cowork Plugin Starter

Enterprise-grade starter template for Microsoft 365 Copilot Cowork Plugins with MCP integration.

## Features

- Microsoft 365 Copilot skill architecture
- MCP JSON-RPC 2.0 server scaffold
- TypeScript backend services
- Manifest validation and packaging scripts
- Local development and CI-ready workflows
- Sample contract analysis skill implementation

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Copy environment templates:
```bash
cp .env.example .env
cp apps/mcp-server/.env.example apps/mcp-server/.env
```

3. Run the MCP server locally:
```bash
pnpm dev:mcp-server
```

4. Validate manifest and package plugin:
```bash
pnpm validate-manifest
pnpm package-plugin
```

## Folder structure

- `manifest.json` - plugin manifest for Copilot package registration
- `assets/` - icon assets used by the plugin
- `skills/` - Copilot skill definition and sample references
- `apps/mcp-server/` - MCP-backed backend service
- `scripts/` - manifest, packaging, and icon utility scripts
- `docs/` - developer guidance for architecture, deployment, auth, and publishing
- `.github/workflows/` - CI and release automation

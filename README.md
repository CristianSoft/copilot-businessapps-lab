# Copilot BusinessApps Lab

Practical and experimental scenarios for integrating Copilot, AI Agents, and Generative AI into Microsoft Business Applications, Dynamics 365, and Power Platform solutions for enterprise productivity and automation.

Quick links

- Plugin: copilot-cowork-plugin/
- Server: copilot-cowork-plugin/apps/mcp-server/
- Skills: copilot-cowork-plugin/skills/

Getting started

1. Install dependencies (pnpm required):

```bash
pnpm install
```

2. Run or develop the MCP server (from `copilot-cowork-plugin`):

```bash
cd copilot-cowork-plugin
pnpm --filter ./apps/mcp-server dev
```

3. Tests: run the repository tests where available (example for MCP server):

```bash
cd copilot-cowork-plugin/apps/mcp-server
pnpm test
```

Repository layout

- `copilot-cowork-plugin/` — main plugin workspace and packages.
	- `apps/mcp-server/` — TypeScript MCP server implementation used to host tools and services.
	- `skills/` — authored skills and supporting scripts (e.g. `contract-analysis`).
	- `scripts/` — utility scripts for packaging and validation.

Contributing

If you want to extend the plugin or add tools:

- Follow existing patterns in `apps/mcp-server/src/` for middleware, schemas, and tools.
- Add tests under `apps/mcp-server/tests/` for new tools.

More information

See the file-by-file guide at [docs/FILE_GUIDE.md](docs/FILE_GUIDE.md) for details about what each file and folder does.

---
Generated/updated by GitHub Copilot assistant.

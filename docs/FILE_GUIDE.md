# File-by-file guide

This document explains the purpose of the main files and folders in this repository.

- `copilot-cowork-plugin/` — Main plugin workspace containing the MCP server, skills, and packaging scripts.
  - `LICENSE`, `manifest.json`, `package.json`, `pnpm-workspace.yaml` — plugin packaging and dependency manifests.
  - `apps/mcp-server/` — The MCP server implementation used to host tools and services.
    - `package.json`, `tsconfig.json` — server package and TypeScript config.
    - `src/index.ts` — server entrypoint (wires up routes and starts the server).
    - `src/server.ts` — server bootstrap and HTTP listener.
    - `src/config/env.ts` — environment configuration and env var parsing.
    - `src/middleware/logger.ts` — request logging middleware.
    - `src/middleware/errorHandler.ts` — centralized error handling.
    - `src/schemas/toolSchemas.ts` — JSON/validation schemas for tools and RPC.
    - `src/services/openaiService.ts` — wrapper for OpenAI (or similar) calls used by tools.
    - `src/tools/` — individual tool implementations and exports.
      - `contract/` — contract analysis tools: `analyzeContract.ts`, `compareContracts.ts`, `summarizeContract.ts`.
      - `legal/` — legal-related tools such as `searchCaseLaw.ts`.
    - `src/types/mcp.ts` — TypeScript types shared across the MCP server.
    - `src/utils/jsonRpc.ts` — JSON-RPC helpers and transport utilities.
    - `src/utils/validation.ts` — input validation helpers used by endpoints and tools.
    - `tests/tools.test.ts` — unit tests for server tools.

- `assets/` — static assets used by the plugin (icons, images).

- `docs/` — repository documentation. This file is `docs/FILE_GUIDE.md`.

- `scripts/` — developer scripts.
  - `generate-icons.ts` — icon generation helper for packaging.
  - `package-plugin.ts` — packaging script for building the plugin artifact.
  - `validate-manifest.ts` — validates `manifest.json` before publishing.

- `skills/` — authored skills and data used by the plugin.
  - `contract-analysis/` — contract analysis skill with `SKILL.md`, references and helper scripts.
    - `SKILL.md` — human-readable skill description and usage for the contract-analysis skill.
    - `references/` — supporting content such as `clause-taxonomy.md` and `risk-scoring.md`.
    - `scripts/extract-clauses.ts` — extraction helper used by the skill.

If you want a deeper description for any specific file or to document additional files, tell me which path and I'll expand this guide.

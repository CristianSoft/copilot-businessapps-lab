---
name: contract-analysis
title: Contract Analysis
description: Analyze legal contracts, extract key clauses, score risk, and compare agreements.
version: 1.0
triggerPhrases:
  - "analyze contract"
  - "contract risk"
  - "review agreement"
workflow:
  - discovery
  - analysis
  - recommendation
output:
  type: markdown
  schema:
    title: string
    summary: string
    recommendations: array
files:
  - "references/clause-taxonomy.md"
  - "references/risk-scoring.md"
  - "scripts/extract-clauses.ts"
---

## Contract Analysis Skill

Use this skill to analyze contract content, identify clauses, and produce risk-aware summaries.

### Supported workflows

- Extract key contract clauses from agreement content
- Classify clauses using the taxonomy reference
- Estimate risk scores with companion guidance
- Output a structured markdown summary for Copilot

### Companion resources

- `references/clause-taxonomy.md`
- `references/risk-scoring.md`
- `scripts/extract-clauses.ts`

import { describe, expect, test } from "vitest";
import { analyzeContract } from "../src/tools/contract/analyzeContract";
import { compareContracts } from "../src/tools/contract/compareContracts";

describe("MCP Server tool functions", () => {
  test("analyzeContract returns summary and section count", () => {
    const result = analyzeContract("Section 1. Test contract.\n\nSection 2. Additional terms.");
    expect(result.summary).toContain("Contract content contains");
    expect(result.sectionCount).toBe(2);
  });

  test("compareContracts detects different content", () => {
    const result = compareContracts("First", "Second");
    expect(result.status).toBe("different");
    expect(result.firstLength).toBe(5);
    expect(result.secondLength).toBe(6);
  });
});

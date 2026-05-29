import { analyzeContractSchema, compareContractsSchema } from "../schemas/toolSchemas";
import { analyzeContract, compareContracts, summarizeContract, searchCaseLaw } from "../tools";
import { type JsonRpcRequest, type JsonRpcResponse, type JsonRpcErrorResponse } from "../types/mcp";

export async function jsonRpcHandler(request: JsonRpcRequest, apiKey?: string): Promise<JsonRpcResponse | JsonRpcErrorResponse> {
  if (request.jsonrpc !== "2.0" || typeof request.method !== "string") {
    return { jsonrpc: "2.0", id: request.id ?? null, error: { code: -32600, message: "Invalid Request" } };
  }

  const params = request.params ?? {};
  try {
    switch (request.method) {
      case "contract.analyze":
        analyzeContractSchema.parse(params);
        return {
          jsonrpc: "2.0",
          id: request.id ?? null,
          result: analyzeContract(params.content as string)
        };
      case "contract.summarize":
        analyzeContractSchema.parse(params);
        return {
          jsonrpc: "2.0",
          id: request.id ?? null,
          result: { summary: summarizeContract(params.content as string) }
        };
      case "contract.compare":
        compareContractsSchema.parse(params);
        return {
          jsonrpc: "2.0",
          id: request.id ?? null,
          result: compareContracts(params.first as string, params.second as string)
        };
      case "legal.search":
        return {
          jsonrpc: "2.0",
          id: request.id ?? null,
          result: searchCaseLaw(String(params.query ?? ""))
        };
      default:
        return {
          jsonrpc: "2.0",
          id: request.id ?? null,
          error: { code: -32601, message: "Method not found" }
        };
    }
  } catch (error) {
    return {
      jsonrpc: "2.0",
      id: request.id ?? null,
      error: { code: -32602, message: error instanceof Error ? error.message : "Invalid params" }
    };
  }
}

export interface JsonRpcRequest {
  jsonrpc: "2.0";
  method: string;
  params?: Record<string, unknown>;
  id?: string | number | null;
}

export interface JsonRpcResponse {
  jsonrpc: "2.0";
  result: unknown;
  id: string | number | null;
}

export interface JsonRpcErrorResponse {
  jsonrpc: "2.0";
  error: {
    code: number;
    message: string;
    data?: unknown;
  };
  id: string | number | null;
}

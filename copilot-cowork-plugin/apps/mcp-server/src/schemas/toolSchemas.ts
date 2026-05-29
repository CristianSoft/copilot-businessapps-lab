import { z } from "zod";

export const jsonRpcParamsSchema = z.object({
  method: z.string(),
  params: z.record(z.any()).optional()
});

export const analyzeContractSchema = z.object({
  content: z.string().min(1)
});

export const compareContractsSchema = z.object({
  first: z.string().min(1),
  second: z.string().min(1)
});

export type AnalyzeContractInput = z.infer<typeof analyzeContractSchema>;
export type CompareContractsInput = z.infer<typeof compareContractsSchema>;

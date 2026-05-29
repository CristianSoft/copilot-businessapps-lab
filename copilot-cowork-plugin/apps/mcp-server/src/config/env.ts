import { config } from "dotenv";
import { z } from "zod";

config();

const envSchema = z.object({
  PORT: z.string().default("3000").transform(Number),
  OPENAI_API_KEY: z.string().optional(),
  MCP_SKILL_PREFIX: z.string().default("contract_analysis")
});

export const env = envSchema.parse(process.env);

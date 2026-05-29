import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const manifestSchema = z.object({
  name: z.string().min(1),
  version: z.string().min(1),
  description: z.string().min(1),
  publisher: z.string().min(1),
  icons: z.object({ color: z.string().min(1), outline: z.string().min(1) }),
  endpoints: z.record(z.object({ url: z.string().url(), protocol: z.string().min(1) })),
  capabilities: z.array(z.string()),
  permissions: z.array(z.string())
});

const manifestPath = path.resolve(process.cwd(), "manifest.json");
const raw = fs.readFileSync(manifestPath, "utf8");
const manifest = JSON.parse(raw);
manifestSchema.parse(manifest);
for (const icon of [manifest.icons.color, manifest.icons.outline]) {
  const assetPath = path.resolve(process.cwd(), icon);
  if (!fs.existsSync(assetPath)) {
    throw new Error(`Missing asset: ${assetPath}`);
  }
}
console.log("manifest.json is valid and icon assets exist.");

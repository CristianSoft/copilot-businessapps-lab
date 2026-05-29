import fs from "node:fs";

const clauseMarkers = [
  "termination",
  "confidentiality",
  "indemnification",
  "liability",
  "payment",
  "governing law",
  "data protection",
  "intellectual property"
];

export function extractClauses(text: string) {
  const normalized = text.toLowerCase();
  return clauseMarkers
    .map((marker) => {
      const regex = new RegExp(`(.{0,120}\\b${marker}\\b.{0,120})`, "gi");
      const matches = [...normalized.matchAll(regex)].map((match) => match[1].trim());
      return matches.length ? { marker, excerpts: matches } : null;
    })
    .filter(Boolean);
}

if (process.argv.length > 2) {
  const filePath = process.argv[2];
  const content = fs.readFileSync(filePath, "utf8");
  console.log(JSON.stringify(extractClauses(content), null, 2));
}

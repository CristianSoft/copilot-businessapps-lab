import fs from "node:fs";
import path from "node:path";

const base64Color = "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQLCxuM3CyibQAAAB1pVFh0Q29tbWVudAAAAAAAvK6ymQAAAE9JREFUWMPt0jENgDAMBdBD/uhplTt/Bj2+y4hYyiNRu0knS7rZnQ+6w8OvgBgFovVBMEBE3BBYrgIDNJ0AAAAASUVORK5CYII=";
const base64Outline = "iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAAB3AH1ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5AQLCxcLMqqkUAAAAB1pVFh0Q29tbWVudAAAAAAAvK6ymQAAAEVJREFUWMPt0jEOgCAIBNCd79Z7w+5W4g7c6EFTnucgeF5rDMg4hxZVqKfB9KBwIZm3kkJZ1jYAAAAASUVORK5CYII=";

const assets = [
  { file: "assets/color.png", data: base64Color },
  { file: "assets/outline.png", data: base64Outline }
];

for (const asset of assets) {
  const outPath = path.resolve(process.cwd(), asset.file);
  fs.writeFileSync(outPath, Buffer.from(asset.data, "base64"));
}

console.log("Generated placeholder icon assets.");

import fs from "node:fs";
import path from "node:path";
import archiver from "archiver";

const outputPath = path.resolve(process.cwd(), "copilot-cowork-plugin.zip");
const output = fs.createWriteStream(outputPath);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log(`Plugin package created: ${outputPath} (${archive.pointer()} bytes)`);
});
archive.on("error", (err) => {
  throw err;
});
archive.pipe(output);
archive.file(path.resolve(process.cwd(), "manifest.json"), { name: "manifest.json" });
archive.directory(path.resolve(process.cwd(), "assets"), "assets");
archive.directory(path.resolve(process.cwd(), "skills"), "skills");
archive.finalize();

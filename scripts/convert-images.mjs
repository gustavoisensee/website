import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("src/assets");

await sharp(path.join(root, "images/profile.jpg"))
  .resize(384)
  .webp({ quality: 82 })
  .toFile(path.join(root, "images/profile.webp"));

await sharp(path.join(root, "images/donut.png"))
  .webp({ quality: 85 })
  .toFile(path.join(root, "images/donut.webp"));

const logosDir = path.join(root, "logos");
for (const file of await readdir(logosDir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const base = file.replace(/\.(jpe?g|png)$/i, "");
  await sharp(path.join(logosDir, file))
    .resize(56, 56, { fit: "cover" })
    .webp({ quality: 80 })
    .toFile(path.join(logosDir, `${base}.webp`));
}

console.log("WebP images generated");

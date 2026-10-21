import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

for (const directory of ['public/images', 'src/assets/images']) {
  for (const file of await readdir(directory)) {
    if (!/\.(jpe?g|png)$/i.test(file) || file.startsWith('logo')) continue;
    const input = path.join(directory, file);
    const hero = file.startsWith('hero_');
    await sharp(input).rotate().resize({ width: hero ? 960 : 1440, withoutEnlargement: true })
      .webp({ quality: hero ? 72 : 80 }).toFile(input.replace(/\.[^.]+$/, '.webp'));
  }
}
await sharp('public/images/logo1.png').resize({ width: 480, withoutEnlargement: true })
  .webp({ quality: 85 }).toFile('public/images/logo1.webp');

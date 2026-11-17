const fs = require('node:fs');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const paths = [...html.matchAll(/(?:src|href)="(src\/assets\/[^"]+)"/g)].map(m => m[1]);
assert.ok(paths.length > 5, "Expected bundled site assets");
for (const p of paths) assert.ok(fs.existsSync(p), `Missing local asset ${p}`);
assert.ok(!html.includes('apple-splash-'), 'Do not link nonexistent PNG splash assets');
console.log(`Validated ${paths.length} local asset references`);

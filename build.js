/* Regenerates content/manifest.json from whatever is in the content folders.
   Netlify runs this on every deploy, so adding a file in the CMS is enough —
   you never edit the manifest by hand. */
const fs = require('fs');
const path = require('path');

function listMd(dir) {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
    .sort();
}

const manifest = {
  notes: listMd('content/notes'),
  writing: listMd('content/writing')
};

const out = path.join(__dirname, 'content/manifest.json');
fs.writeFileSync(out, JSON.stringify(manifest, null, 2) + '\n');
console.log('manifest rebuilt:', manifest.notes.length, 'notes,', manifest.writing.length, 'writing');

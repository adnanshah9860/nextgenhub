const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'public', '_redirects');
const dest = path.join(root, 'dist', '_redirects');

try {
  if (fs.existsSync(src)) {
    // ensure dist exists
    fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log('Copied public/_redirects -> dist/_redirects');
  } else {
    console.log('public/_redirects not found; nothing copied.');
  }
} catch (err) {
  console.error('Failed to copy _redirects:', err);
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'dist', 'public');
const distRoot = path.join(root, 'dist');
const srcRedirect = path.join(root, 'public', '_redirects');
const destRedirect = path.join(distRoot, '_redirects');

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyFolderRecursive(srcFolder, destFolder) {
  if (!fs.existsSync(srcFolder)) return;
  const items = fs.readdirSync(srcFolder, { withFileTypes: true });
  for (const item of items) {
    const srcPath = path.join(srcFolder, item.name);
    const destPath = path.join(destFolder, item.name);
    if (item.isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else if (item.isFile()) {
      copyFile(srcPath, destPath);
    }
  }
}

try {
  // 1) If dist/public exists, copy its contents to dist root
  if (fs.existsSync(publicDir)) {
    copyFolderRecursive(publicDir, distRoot);
    // optional: remove dist/public (silently ignore errors)
    try { fs.rmSync(publicDir, { recursive: true, force: true }); } catch(e){}
    console.log('Moved dist/public/* -> dist/');
  } else {
    console.log('No dist/public folder found; skipping move.');
  }

  // 2) Copy _redirects from public/ to dist/
  if (fs.existsSync(srcRedirect)) {
    copyFile(srcRedirect, destRedirect);
    console.log('Copied public/_redirects -> dist/_redirects');
  } else {
    console.log('public/_redirects not found; skipping redirect copy.');
  }

  process.exit(0);
} catch (err) {
  console.error('Postbuild helper failed:', err);
  process.exit(1);
}

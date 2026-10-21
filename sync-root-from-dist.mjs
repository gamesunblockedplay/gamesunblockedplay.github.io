import fs from 'fs';
import path from 'path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(root, 'assets');
const publicDir = path.join(root, 'public');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function copyFile(source, target) {
  fs.copyFileSync(source, target);
  console.log(`Copied: ${path.relative(root, target)}`);
}

function copyDir(sourceDir, targetDir) {
  ensureDir(targetDir);
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  }
}

if (!fs.existsSync(distDir)) {
  throw new Error('dist directory not found. Run the build first.');
}

copyFile(path.join(distDir, 'index.html'), path.join(root, 'index.html'));

const dist404 = path.join(distDir, '404.html');
if (fs.existsSync(dist404)) {
  copyFile(dist404, path.join(root, '404.html'));
}

const distAdsTxt = path.join(distDir, 'ads.txt');
if (fs.existsSync(distAdsTxt)) {
  copyFile(distAdsTxt, path.join(root, 'ads.txt'));
}

const distRobotsTxt = path.join(distDir, 'robots.txt');
if (fs.existsSync(distRobotsTxt)) {
  copyFile(distRobotsTxt, path.join(root, 'robots.txt'));
}

if (fs.existsSync(distAssetsDir)) {
  copyDir(distAssetsDir, rootAssetsDir);
}

const publicGamesJson = path.join(publicDir, 'games.json');
if (fs.existsSync(publicGamesJson)) {
  copyFile(publicGamesJson, path.join(root, 'games.json'));
}

const publicImgDir = path.join(publicDir, 'img');
const rootImgDir = path.join(root, 'img');
if (fs.existsSync(publicImgDir)) {
  copyDir(publicImgDir, rootImgDir);
}
const pwaFiles = [
  'sw.js',
  'pwa-client.js',
  'manifest.webmanifest',
  'manifest.json',
  'favicon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png',
  'apple-touch-icon.png'
];

for (const file of pwaFiles) {
  const distFile = path.join(distDir, file);
  if (fs.existsSync(distFile)) {
    copyFile(distFile, path.join(root, file));
  } else {
    const pubFile = path.join(publicDir, file);
    if (fs.existsSync(pubFile)) {
      copyFile(pubFile, path.join(root, file));
    }
  }
}

console.log('Root publish files synced from dist.');

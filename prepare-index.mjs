import fs from 'fs';
import path from 'path';

const indexPath = path.resolve('index.html');
if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  content = content.replace(
    /<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>(\s*<link rel="stylesheet" crossorigin href="\/assets\/index-[^"]+\.css">)?/,
    '<script type="module" src="/src/main.js"></script>'
  );
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('index.html prepared for Vite build.');
}

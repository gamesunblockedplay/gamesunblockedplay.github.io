import fs from 'fs';
import path from 'path';

const games = JSON.parse(fs.readFileSync('public/games.json', 'utf8'));

// Function to create slug from title
function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Template for game page
function generateGamePage(game) {
  const slug = createSlug(game.title);
  const categories = Array.isArray(game.cat) ? game.cat.join(', ') : game.cat;
  const title = `${game.title} - Unblocked Games G+`;
  const description = `Play ${game.title} unblocked online for free. No download required. ${categories} game.`;
  const url = `https://unblockgamegplus.github.io/game/${slug}.html`;
  const gameUrl = game.gameUrl;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="unblocked games, ${game.title.toLowerCase()}, ${categories.toLowerCase()}, free online games, no download games">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Unblocked Games G+">

  <!-- Canonical -->
  <link rel="canonical" href="${url}">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${game.thumb}">
  <meta property="og:site_name" content="Unblocked Games G+">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <meta name="theme-color" content="#7c3aed">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>">

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "${game.title}",
    "description": "${description}",
    "url": "${url}",
    "image": "${game.thumb}",
    "genre": "${categories}",
    "publisher": {
      "@type": "Organization",
      "name": "Unblocked Games G+"
    },
    "playMode": "SinglePlayer"
  }
  </script>

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: system-ui, sans-serif;
      background: #08051a;
      color: #e5e7eb;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .game-title {
      font-size: 2rem;
      color: #8b5cf6;
      margin-bottom: 10px;
    }
    .game-meta {
      color: #9ca3af;
      margin-bottom: 20px;
    }
    .game-iframe {
      width: 100%;
      height: 600px;
      border: none;
      border-radius: 8px;
    }
    .back-link {
      display: inline-block;
      margin-top: 20px;
      color: #8b5cf6;
      text-decoration: none;
    }
    .back-link:hover {
      text-decoration: underline;
    }
    .ad-banner {
      display: flex;
      justify-content: center;
      margin: 16px 0;
      background: rgba(255,255,255,0.02);
      border: 1px dashed rgba(255,255,255,0.05);
      border-radius: 12px;
      padding: 8px 0;
      width: 100%;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="game-title">${game.title}</h1>
      <div class="game-meta">Categories: ${categories}</div>
    </div>

    <iframe src="${gameUrl}" class="game-iframe" allowfullscreen></iframe>

    <a href="/" class="back-link">← Back to Unblocked Games G+</a>
  </div>

  <!-- Histats.com -->
  <script type="text/javascript">var _Hasync= _Hasync|| [];
  _Hasync.push(['Histats.start', '1,3998156,4,0,0,0,00010000']);
  _Hasync.push(['Histats.fasi', '1']);
  _Hasync.push(['Histats.track_hits', '']);
  (function() {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
  })();</script>
  <noscript><a href="/" target="_blank"><img src="//sstatic1.histats.com/0.gif?3998156&101" alt="" border="0"></a></noscript>
</body>
</html>`;
}

// Create game directory if not exists
const gameDir = 'public/game';
if (!fs.existsSync(gameDir)) {
  fs.mkdirSync(gameDir, { recursive: true });
}

// Generate pages for all games
games.forEach(game => {
  const slug = createSlug(game.title);
  const fileName = `${slug}.html`;
  const filePath = path.join(gameDir, fileName);
  const html = generateGamePage(game);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: ${fileName}`);
});

console.log(`Generated ${games.length} game pages.`);
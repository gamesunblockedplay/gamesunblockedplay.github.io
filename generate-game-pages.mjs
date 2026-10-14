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

function generateAllGamesIndex(games) {
  const items = games.map(game => {
    const slug = createSlug(game.title);
    const categories = Array.isArray(game.cat) ? game.cat.join(', ') : game.cat;
    return `      <li><a href="/game/${slug}.html">${game.title}</a><span>${categories}</span></li>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All Games - Unblocked Games G+</title>
  <meta name="description" content="Browse all static HTML game pages on Unblocked Games G+.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://unblockgamegplus.pages.dev/all-games.html">
  <link rel="preload" as="script" href="https://live.demand.supply/up.js"><script async data-cfasync="false" type="text/javascript" src="https://live.demand.supply/up.js"></script>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; background: #08051a; color: #e5e7eb; }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 32px 20px 56px; }
    h1 { margin: 0 0 10px; color: #8b5cf6; }
    p { color: #cbd5e1; line-height: 1.6; }
    .top-link { display: inline-block; margin: 12px 0 28px; color: #c4b5fd; text-decoration: none; }
    ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
    li { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 14px 16px; }
    a { color: #fff; text-decoration: none; font-weight: 700; display: block; margin-bottom: 6px; }
    a:hover { color: #c4b5fd; }
    span { color: #94a3b8; font-size: 0.95rem; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>All Unblocked Games</h1>
    <p>Static HTML directory of every game page available on Unblocked Games G+.</p>
    <a class="top-link" href="/">Back to homepage</a>
    <ul>
${items}
    </ul>
  </div>
</body>
</html>`;
}

// Template for game page
function generateGamePage(game) {
  const slug = createSlug(game.title);
  const categories = Array.isArray(game.cat) ? game.cat.join(', ') : game.cat;
  const title = `${game.title} - Unblocked Games G+`;
  const description = `Play ${game.title} unblocked online for free. No download required. ${categories} game. Enjoy this exciting ${categories.toLowerCase()} game directly in your browser with no downloads or installations required.`;
  const url = `https://unblockgamegplus.pages.dev/game/${slug}.html`;
  const gameUrl = game.gameUrl;
  const thumbUrl = game.thumb || `https://unblocked-games-g-plus.bitbucket.io/img/class-${game.id}.png`;

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
  <meta property="og:image" content="${thumbUrl}">
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
    "image": "${thumbUrl}",
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
      margin-bottom: 30px;
    }
    .game-title {
      font-size: 2.5rem;
      color: #8b5cf6;
      margin-bottom: 10px;
    }
    .game-meta {
      color: #9ca3af;
      margin-bottom: 20px;
      font-size: 1.1rem;
    }
    .game-description {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 30px;
      text-align: center;
      color: #d1d5db;
    }
    .game-thumbnail {
      display: block;
      max-width: 300px;
      height: auto;
      margin: 0 auto 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .game-iframe {
      width: 100%;
      height: 600px;
      border: none;
      border-radius: 8px;
    }
    .back-link {
      display: inline-block;
      margin-top: 30px;
      color: #8b5cf6;
      text-decoration: none;
      font-size: 1.1rem;
      padding: 10px 20px;
      border: 1px solid #8b5cf6;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    .back-link:hover {
      background: #8b5cf6;
      color: white;
    }
    .ad-banner {
      display: flex;
      justify-content: center;
      margin: 20px 0;
      background: rgba(255,255,255,0.02);
      border: 1px dashed rgba(255,255,255,0.05);
      border-radius: 12px;
      padding: 10px 0;
      width: 100%;
      overflow: hidden;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${thumbUrl}" alt="${game.title}" class="game-thumbnail" loading="lazy">
      <h1 class="game-title">${game.title}</h1>
      <div class="game-meta">Categories: ${categories}</div>
      <div class="game-description">
        ${description}
      </div>
    </div>

    <div class="ad-banner">
      <iframe srcdoc="<!DOCTYPE html><html><head><style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;background:transparent;overflow:hidden;}</style></head><body><script>window.atOptions={key:'72aae8a75da17a34e48ed84feaa311bf',format:'iframe',height:90,width:728,params:{}};</script><script src='https://biggerbreakerfind.com/72aae8a75da17a34e48ed84feaa311bf/invoke.js'></script></body></html>" width="728" height="90" frameborder="0" scrolling="no"></iframe>
    </div>

    <iframe src="${gameUrl}" class="game-iframe" allowfullscreen></iframe>

    <div class="ad-banner">
      <iframe srcdoc="<!DOCTYPE html><html><head><style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;background:transparent;overflow:hidden;}</style></head><body><script>window.atOptions={key:'4b03159602cba0243869c415124b923e',format:'iframe',height:90,width:728,params:{}};</script><script src='https://biggerbreakerfind.com/4b03159602cba0243869c415124b923e/invoke.js'></script></body></html>" width="728" height="90" frameborder="0" scrolling="no"></iframe>
    </div>

    <div style="text-align: center;">
      <a href="/" class="back-link">← Back to Unblocked Games G+</a>
    </div>
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

fs.writeFileSync(path.join('public', 'all-games.html'), generateAllGamesIndex(games), 'utf8');
console.log('Generated: all-games.html');

console.log(`Generated ${games.length} game pages.`);

import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://gamesunblockedplay.github.io';
const games = JSON.parse(fs.readFileSync('public/games.json', 'utf8'));

const CAT_ICONS = {
  Skill: '🎯',
  Running: '🏃',
  Adventure: '🗺️',
  Platform: '🟪',
  Car: '🚗',
  Racing: '🏁',
  Moto: '🏍️',
  '3D': '🧊',
  Shooting: '🔫',
  Multiplayer: '🌍',
  Puzzle: '🧩',
  Animal: '🐾',
  Simulation: '🕹️',
  Management: '📈',
  Survival: '🔥',
  Strategy: '♟️',
  Board: '🎲',
  Girls: '✨',
  '2 Player': '👥',
  Sports: '⚽',
  Popular: '⭐',
  New: '🆕',
  Stickman: '🕴️',
};

const CAT_DESC = {
  Skill: 'skill-based challenges that test your reflexes, hand-eye coordination, and timing',
  Running: 'fast-paced running and parkour gameplay where split-second agility is key to survival',
  Adventure: 'immersive adventure quests packed with rich worlds, story exploration, and hidden secrets',
  Platform: 'classic precision platformer gameplay featuring running, obstacle jumping, and collecting',
  Car: 'high-octane car driving, precision parking, and stunt physics challenges',
  Racing: 'competitive high-speed racing across urban tracks, neon circuits, and wild off-road courses',
  Moto: 'thrilling motorcycle stunts, dirt-bike trials, and high-speed balance challenges',
  '3D': 'cutting-edge 3D browser games with modern graphics, spatial physics, and rich environments',
  Shooting: 'tactical action and first-person shooting combat featuring diverse arsenals and targets',
  Multiplayer: 'thrilling multiplayer games where you can team up with friends or challenge rivals worldwide',
  Puzzle: 'brain-training logic puzzles and problem-solving levels designed to sharpen mental acuity',
  Animal: 'delightful animal-themed adventures featuring pets, zoo critters, and wildlife exploration',
  Simulation: 'realistic simulation sandbox games ranging from vehicle handling to life management',
  Management: 'tycoon and resource management games where you build, optimize, and expand your empire',
  Survival: 'intense survival challenges where smart resource conservation and quick decisions keep you alive',
  Strategy: 'deep tactical strategy games demanding strategic positioning, planning, and tactical decisions',
  Board: 'timeless board and tabletop game classics re-imagined for zero-latency browser play',
  Girls: 'vibrant fashion, design, lifestyle, and makeover games celebrating style and creativity',
  '2 Player': 'exciting two-player games perfect for competitive rivalries or cooperative team play on one keyboard',
  Sports: 'dynamic sports action covering soccer, basketball, tennis, golf, and athletic contests',
  Popular: 'the most beloved and trending unblocked browser games enjoyed by millions of active players',
  New: 'freshly published HTML5 titles featuring innovative mechanics and state-of-the-art WebGL design',
  Stickman: 'entertaining stickman physics, kung-fu fights, and high-flying ragdoll action games',
};

const CATEGORIES = [
  { id: 'all', emoji: '🎮', label: 'All Games' },
  { id: 'Popular', emoji: '⭐', label: 'Popular' },
  { id: 'New', emoji: '🆕', label: 'New' },
  { id: 'Skill', emoji: '🎯', label: 'Skill' },
  { id: 'Running', emoji: '🏃', label: 'Running' },
  { id: 'Adventure', emoji: '🗺️', label: 'Adventure' },
  { id: 'Platform', emoji: '🟪', label: 'Platform' },
  { id: 'Car', emoji: '🚗', label: 'Car' },
  { id: 'Racing', emoji: '🏁', label: 'Racing' },
  { id: 'Moto', emoji: '🏍️', label: 'Moto' },
  { id: '3D', emoji: '🧊', label: '3D' },
  { id: 'Shooting', emoji: '🔫', label: 'Shooting' },
  { id: 'Multiplayer', emoji: '🌍', label: 'Multiplayer' },
  { id: '2 Player', emoji: '👥', label: '2 Player' },
  { id: 'Sports', emoji: '⚽', label: 'Sports' },
  { id: 'Puzzle', emoji: '🧩', label: 'Puzzle' },
  { id: 'Animal', emoji: '🐾', label: 'Animal' },
  { id: 'Stickman', emoji: '🕴️', label: 'Stickman' },
  { id: 'Simulation', emoji: '🕹️', label: 'Simulation' },
  { id: 'Management', emoji: '📈', label: 'Management' },
  { id: 'Survival', emoji: '🔥', label: 'Survival' },
  { id: 'Strategy', emoji: '♟️', label: 'Strategy' },
  { id: 'Board', emoji: '🎲', label: 'Board' },
  { id: 'Girls', emoji: '✨', label: 'Girls' },
];

function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '')
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getThumbUrl(game) {
  return `/img/class-${game.id}.webp`;
}

// ──── AdSense Configuration (Preserved) ─────────────────────
const ADSENSE_CLIENT = 'ca-pub-8687742238485131';
const ADSENSE_SLOT_TOP = '8861468349';
const ADSENSE_SLOT_HERO = '6097283217';
const ADSENSE_SLOT_300_LEFT = '7132584167';
const ADSENSE_SLOT_300_RIGHT = '9115302567';

function getAdSenseHTML(slot = ADSENSE_SLOT_TOP, comment = 'Responsive Game Banner') {
  return `
    <div class="ad-banner-adsense">
      <span class="ad-subtle-badge">✨ ADVERTISEMENT</span>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
           crossorigin="anonymous"></script>
      <!-- ${comment} -->
      <ins class="adsbygoogle"
           style="display:block;width:100%;min-height:90px;"
           data-ad-client="${ADSENSE_CLIENT}"
           data-ad-slot="${slot}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
        (function() {
          function pushAd() {
            try {
              (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (err) {}
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', pushAd);
          } else {
            pushAd();
          }
        })();
      </script>
    </div>`;
}

function getAdsDuoRowHTML() {
  return `
    <div class="ads-duo-wrap">
      <span class="ads-duo-badge">✨ ADVERTISEMENT</span>
      <div class="ads-duo-row">
        <div class="ad-container-300">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>
          <!-- 300x250_games_kiri -->
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="${ADSENSE_CLIENT}"
               data-ad-slot="${ADSENSE_SLOT_300_LEFT}"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
        <div class="ad-container-300">
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>
          <!-- 300x250_games_kanan -->
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="${ADSENSE_CLIENT}"
               data-ad-slot="${ADSENSE_SLOT_300_RIGHT}"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
      </div>
    </div>`;
}

function getSingleAd300HTML(slot, comment = '300x250_ad') {
  return `
    <div class="ad-box-wrapper">
      <span class="ad-subtle-badge">✨ ADVERTISEMENT</span>
      <div class="ad-container-300">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>
        <!-- ${comment} -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:300px;height:250px"
             data-ad-client="${ADSENSE_CLIENT}"
             data-ad-slot="${slot}"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>`;
}

// ──── Generate All-Games Master Index ───────────────────────
function generateAllGamesIndex(allGames) {
  const sortedGames = [...allGames].sort((a, b) => a.title.localeCompare(b.title));
  
  const items = sortedGames.map(game => {
    const slug = createSlug(game.title);
    const cats = Array.isArray(game.cat) ? game.cat : [game.cat];
    const primaryCat = cats[0] || 'Game';
    const thumbUrl = getThumbUrl(game);
    const rating = (4.7 + ((game.id * 17) % 30) / 100).toFixed(1);

    return `
      <a class="game-card" href="/game/${slug}.html" aria-label="Play ${escapeHtml(game.title)} unblocked">
        <div class="card-media">
          <img class="card-img" src="${thumbUrl}" alt="${escapeHtml(game.title)}" loading="lazy" decoding="async" width="280" height="210">
          <div class="card-rating-badge">★ ${rating}</div>
          <div class="card-hover-overlay">
            <span class="card-play-btn">▶ PLAY NOW</span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-title">${escapeHtml(game.title)}</div>
          <div class="card-meta">
            <span class="card-cat">${escapeHtml(primaryCat)}</span>
            <span class="card-status">Unblocked</span>
          </div>
        </div>
      </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All Games Directory - Play Free Online Unblocked Games | Games Unblocked Play</title>
  <meta name="description" content="Complete master directory of free unblocked HTML5 browser games on Games Unblocked Play. Play instantly with zero download, no login, Chromebook supported.">
  <meta name="keywords" content="all games, unblocked games list, games unblocked play, free games catalog, html5 games directory">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${SITE_URL}/all-games.html">
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="VxerIcrn6oSOObLPI8/+lg" async></script>
  <link rel="preload" as="script" href="https://live.demand.supply/up.js"><script async data-cfasync="false" type="text/javascript" src="https://live.demand.supply/up.js"></script>
  <meta name="google-site-verification" content="cFar0HnjXimxEDZJjIBnhWU6Ml8YXTcVsC0yTYI_SgY">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE_URL}/all-games.html">
  <meta property="og:title" content="All Games Directory | Games Unblocked Play">
  <meta property="og:description" content="Browse and play hundreds of unblocked HTML5 games directly in your browser.">
  <meta property="og:site_name" content="Games Unblocked Play">
  <meta property="og:image" content="${SITE_URL}/icon-512.png">

  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#00e5ff">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8687742238485131" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="/style.css">
  <style>
    .directory-hero {
      background: linear-gradient(135deg, #111827, #0d1527);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 32px 36px;
      margin-bottom: 24px;
    }
    .directory-hero h1 {
      font-family: var(--font-heading);
      font-size: 2rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
    }
    .directory-hero p {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      max-width: 800px;
    }
  </style>
</head>
<body>
  <header class="top-header" role="banner">
    <div class="header-inner">
      <div class="brand-wrap">
        <a href="/" class="brand-logo">
          <span class="brand-icon">🎮</span>
          <span class="brand-highlight">GamesUnblocked</span><span class="brand-play">PLAY</span>
        </a>
      </div>
      <div class="header-actions">
        <a href="/" class="btn-nav"><span>🏠</span> Home</a>
        <a href="/all-games.html" class="btn-nav active"><span>📚</span> All Games</a>
        <button class="btn-pwa-install" id="btn-install-app" type="button"><span>📲</span> Install App</button>
      </div>
    </div>
  </header>

  <main class="app-shell" role="main">
    ${getAdSenseHTML(ADSENSE_SLOT_TOP, 'Top Banner Leaderboard')}

    <div class="directory-hero">
      <h1>All Unblocked Games Directory (${sortedGames.length} Titles)</h1>
      <p>
        Explore the complete A-Z catalog of unblocked browser games available on <strong>Games Unblocked Play</strong>. Every game runs in pure HTML5/WebGL, tested for instant 60 FPS play on school Chromebooks and home computers with no downloads required.
      </p>
    </div>

    <div class="section-head">
      <h2 class="section-title"><span>📚 Alphabetical Games Index</span> <span class="section-count">${sortedGames.length} Total</span></h2>
      <a href="/" class="btn-filter-sort active">← Back to Home</a>
    </div>

    <div class="games-grid">
${items}
    </div>

    ${getAdsDuoRowHTML()}
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">🎮 GamesUnblocked<span style="color:var(--coral)">PLAY</span></div>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/all-games.html">All Games</a>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="https://convertpdftoword.github.io" target="_blank" rel="noopener" class="partner-link" title="Convert PDFtoWord Online Free">Convert PDFtoWord</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; ${new Date().getFullYear()} Games Unblocked Play. All rights reserved.</div>
      </div>
    </div>
  </footer>

  <script src="/pwa-client.js" defer></script>
  <!-- Histats.com START (async) -->
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
  <!-- Histats.com END -->
</body>
</html>`;
}

// ──── Generate Individual Static Game Page ──────────────────
function generateGamePage(game, allGames) {
  const slug = createSlug(game.title);
  const cats = Array.isArray(game.cat) ? game.cat : [game.cat];
  const categories = cats.join(', ');
  const primaryCat = cats[0] || 'Popular';
  const pageUrl = `${SITE_URL}/game/${slug}.html`;
  const gameUrl = game.gameUrl || `https://inkyedu118.github.io/g50/class-${game.id}/`;
  const thumbUrl = getThumbUrl(game);
  const safeTitle = escapeHtml(game.title);
  const safePrimaryCat = escapeHtml(primaryCat);
  const catDesc = CAT_DESC[primaryCat] || 'pure instant entertainment directly in your web browser';

  const rating = (4.7 + ((game.id * 17) % 30) / 100).toFixed(1);
  const ratingCount = 120 + ((game.id * 73) % 800);

  // Filter 10 related games from the same category or overall
  const related = allGames
    .filter(item => item.id !== game.id && ((Array.isArray(item.cat) ? item.cat : [item.cat]).includes(primaryCat)))
    .slice(0, 10);

  const fallbackRelated = related.length >= 6 ? related : [
    ...related,
    ...allGames.filter(item => item.id !== game.id && !related.some(r => r.id === item.id)).slice(0, 10 - related.length)
  ];

  const relatedCardsHtml = fallbackRelated.map(item => {
    const itemSlug = createSlug(item.title);
    const itemCats = Array.isArray(item.cat) ? item.cat : [item.cat];
    const itemPrimaryCat = itemCats[0] || 'Game';
    const itemRating = (4.7 + ((item.id * 17) % 30) / 100).toFixed(1);

    return `
      <a class="game-card" href="/game/${itemSlug}.html" aria-label="Play ${escapeHtml(item.title)} unblocked">
        <div class="card-media">
          <img class="card-img" src="${getThumbUrl(item)}" alt="${escapeHtml(item.title)}" loading="lazy" decoding="async" width="280" height="210">
          <div class="card-rating-badge">★ ${itemRating}</div>
          <div class="card-hover-overlay">
            <span class="card-play-btn">▶ PLAY NOW</span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-title">${escapeHtml(item.title)}</div>
          <div class="card-meta">
            <span class="card-cat">${escapeHtml(itemPrimaryCat)}</span>
            <span class="card-status">Unblocked</span>
          </div>
        </div>
      </a>`;
  }).join('\n');

  // Rich JSON-LD Schemas (VideoGame + FAQPage + BreadcrumbList)
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoGame',
      name: game.title,
      description: `Play ${game.title} unblocked online free on Games Unblocked Play. Enjoy zero-install ${primaryCat} gameplay on desktop, Chromebook, and mobile.`,
      url: pageUrl,
      image: `${SITE_URL}${thumbUrl}`,
      genre: cats,
      gamePlatform: ['Web Browser', 'Chromebook', 'Desktop', 'Mobile'],
      applicationCategory: 'Game',
      operatingSystem: 'Any Web Browser',
      inLanguage: 'en',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        ratingCount: ratingCount,
        bestRating: '5',
        worstRating: '1',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Games Unblocked Play',
        url: SITE_URL,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `Is ${game.title} free to play unblocked?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes, ${game.title} is 100% free to play with no downloads, subscriptions, or login required on Games Unblocked Play.`,
          },
        },
        {
          '@type': 'Question',
          name: `Can I play ${game.title} at school on a Chromebook?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes! ${game.title} is fully unblocked and optimized to bypass network restrictions on school Chromebooks and restricted workstations.`,
          },
        },
        {
          '@type': 'Question',
          name: `How do I enable fullscreen mode for ${game.title}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Click the "Fullscreen" button directly above the game canvas to expand ${game.title} to your full display resolution.`,
          },
        },
        {
          '@type': 'Question',
          name: `What controls are used to play ${game.title}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Controls typically utilize WASD or Arrow Keys for movement, Spacebar for actions/jumping, and the Mouse or touchscreen for navigation and aiming.`,
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: primaryCat,
          item: `${SITE_URL}/#/?cat=${encodeURIComponent(primaryCat)}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: game.title,
          item: pageUrl,
        },
      ],
    },
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 🔑 Primary SEO — Target Keyword: Play ${safeTitle} Unblocked -->
  <title>Play ${safeTitle} Unblocked Online - Games Unblocked Play</title>
  <meta name="description" content="Play ${safeTitle} online for free on Games Unblocked Play. Enjoy smooth full-screen ${safePrimaryCat} gameplay with no downloads and no blockers. 100% unblocked for school or home.">
  <meta name="keywords" content="${safeTitle.toLowerCase()} unblocked, play ${safeTitle.toLowerCase()}, play ${safeTitle.toLowerCase()} online, ${safePrimaryCat.toLowerCase()} games unblocked, games unblocked play, free games online">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Games Unblocked Play">
  <link rel="canonical" href="${pageUrl}">

  <!-- Analytics & Ad Scripts -->
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="VxerIcrn6oSOObLPI8/+lg" async></script>
  <link rel="preload" as="script" href="https://live.demand.supply/up.js"><script async data-cfasync="false" type="text/javascript" src="https://live.demand.supply/up.js"></script>
  <meta name="google-site-verification" content="cFar0HnjXimxEDZJjIBnhWU6Ml8YXTcVsC0yTYI_SgY">

  <!-- Open Graph -->
  <meta property="og:type" content="game">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="Play ${safeTitle} Unblocked | Games Unblocked Play">
  <meta property="og:description" content="Play ${safeTitle} free in your browser. No download, full-screen ready, Chromebook unblocked.">
  <meta property="og:image" content="${SITE_URL}${thumbUrl}">
  <meta property="og:site_name" content="Games Unblocked Play">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Play ${safeTitle} Unblocked | Games Unblocked Play">
  <meta name="twitter:description" content="Instant browser gameplay for ${safeTitle}. No downloads required.">
  <meta name="twitter:image" content="${SITE_URL}${thumbUrl}">

  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="theme-color" content="#00e5ff">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">${JSON.stringify(structuredData)}</script>

  <!-- Google AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div id="lights-overlay" style="position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:4000;display:none;pointer-events:none;transition:opacity 0.3s;"></div>

  <header class="top-header" role="banner">
    <div class="header-inner">
      <div class="brand-wrap">
        <a href="/" class="brand-logo">
          <span class="brand-icon">🎮</span>
          <span class="brand-highlight">GamesUnblocked</span><span class="brand-play">PLAY</span>
        </a>
      </div>
      <div class="header-actions">
        <a href="/" class="btn-nav"><span>🏠</span> Home</a>
        <a href="/all-games.html" class="btn-nav"><span>📚</span> All Games</a>
        <button class="btn-pwa-install" id="btn-install-app" type="button"><span>📲</span> Install App</button>
      </div>
    </div>
  </header>

  <main class="play-stage" role="main">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span>&rsaquo;</span>
      <a href="/#/?cat=${encodeURIComponent(primaryCat)}">${safePrimaryCat}</a>
      <span>&rsaquo;</span>
      <span class="current">Play ${safeTitle} Unblocked</span>
    </nav>

    ${getAdSenseHTML(ADSENSE_SLOT_TOP, 'Top Banner Leaderboard')}

    <!-- Game Toolbar & Stage Header -->
    <div class="game-top-bar">
      <div class="game-header-info">
        <div>
          <h1 class="game-stage-title">Play ${safeTitle} Unblocked</h1>
          <div class="game-stage-tags">
            ${cats.map(c => `<span class="game-stage-tag">${escapeHtml(CAT_ICONS[c] || '🎮')} ${escapeHtml(c)}</span>`).join('')}
            <span class="game-stage-tag" style="color:var(--emerald);background:rgba(16,185,129,0.1);">✓ 100% Unblocked</span>
          </div>
        </div>
      </div>

      <div class="game-toolbar">
        <button class="btn-tool" id="btn-favorite" type="button" title="Save to favorites">
          <span id="fav-icon">🤍</span> Favorite
        </button>
        <button class="btn-tool" id="btn-share" type="button" title="Copy game link">
          <span>🔗</span> Share
        </button>
        <button class="btn-tool" id="btn-reload" type="button" title="Reload game frame">
          <span>🔄</span> Reload
        </button>
        <button class="btn-tool" id="btn-theater" type="button" title="Toggle theater mode">
          <span>🎬</span> Theater
        </button>
        <button class="btn-tool" id="btn-lights" type="button" title="Turn lights off">
          <span>💡</span> Lights
        </button>
        <button class="btn-tool primary" id="btn-fullscreen" type="button" title="Play Fullscreen">
          <span>⛶</span> Fullscreen
        </button>
      </div>
    </div>

    <!-- Game Viewport Frame -->
    <div class="game-viewport" id="game-viewport">
      <div class="game-loading-cover" id="game-loading">
        <div class="spinner"></div>
        <p>Loading <strong>${safeTitle}</strong>...</p>
        <div style="font-size:0.8rem;color:var(--text-dim);">Frame will appear automatically once connected.</div>
      </div>
      <iframe
        id="game-frame"
        src="${escapeHtml(gameUrl)}"
        title="Play ${safeTitle} Unblocked Online"
        allowfullscreen
        frameborder="0"
        allow="fullscreen; autoplay; encrypted-media; gamepad"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-top-navigation allow-modals"
      ></iframe>
    </div>

    <!-- Bottom Controls & Status Bar -->
    <div class="game-bottom-bar">
      <div class="game-bottom-left">
        <span class="badge-play-mode">● Live Gameplay</span>
        <span>•</span>
        <span>Rating: ★ ${rating}/5 (${ratingCount} players)</span>
      </div>
      <div style="font-size:0.78rem;">
        Tip: Press <kbd>ESC</kbd> to exit fullscreen.
      </div>
    </div>

    <!-- Hero Card Row (Thumbnail + Summary + Sidebar Ad) -->
    <div class="game-hero-row">
      <div class="game-hero-card">
        <img class="game-hero-thumb" src="${thumbUrl}" alt="${safeTitle}" width="100" height="100" loading="lazy">
        <div class="game-hero-text">
          <h2>About ${safeTitle}</h2>
          <p>
            Experience <strong>${safeTitle} unblocked</strong> directly in your web browser. Featuring smooth responsive gameplay, zero installation, and optimized speed for Chromebooks, PCs, and tablets.
          </p>
        </div>
      </div>
      <div class="game-hero-ad">
        ${getSingleAd300HTML(ADSENSE_SLOT_300_LEFT, '300x250_games_kiri')}
      </div>
    </div>

    <!-- SEO Gameplay Knowledge & Strategy Section -->
    <div class="gameplay-guide-wrap">
      <!-- Overview -->
      <article class="guide-card">
        <div class="guide-card-head">
          <span class="icon">🎮</span>
          <h2>Gameplay Overview &amp; Mechanics</h2>
        </div>
        <p>
          <strong>${safeTitle}</strong> is a standout title in the <strong>${safePrimaryCat}</strong> category on <strong>Games Unblocked Play</strong>. Known for ${catDesc}, this game challenges your timing, strategy, and reflexes in an engaging, interactive arena.
        </p>
        <p>
          Unlike blocked flash portals, <strong>${safeTitle}</strong> runs on a pure modern HTML5/WebGL foundation. This guarantees uninterrupted 60 FPS performance without requiring browser add-ons, administrator permissions, or risk to system integrity.
        </p>

        <div class="specs-matrix">
          <div class="spec-cell">
            <div class="spec-title">🏷️ Category</div>
            <div class="spec-value">${safePrimaryCat}</div>
          </div>
          <div class="spec-cell">
            <div class="spec-title">🖥️ Platform</div>
            <div class="spec-value">HTML5 / Web Browser</div>
          </div>
          <div class="spec-cell">
            <div class="spec-title">💰 Price</div>
            <div class="spec-value green">100% Free</div>
          </div>
          <div class="spec-cell">
            <div class="spec-title">🔓 Compatibility</div>
            <div class="spec-value green">School &amp; Work Unblocked</div>
          </div>
        </div>
      </article>

      <!-- Controls Guide -->
      <article class="guide-card">
        <div class="guide-card-head">
          <span class="icon">🕹️</span>
          <h2>Controls &amp; Keybinds Cheat Sheet</h2>
        </div>
        <p>Master these core controls to dominate levels and set record-breaking scores in <strong>${safeTitle}</strong>:</p>
        
        <div class="controls-grid">
          <div class="control-item">
            <span class="control-label">Movement / Steer</span>
            <div class="control-keys"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or <kbd>&uarr;&larr;&darr;&rarr;</kbd></div>
          </div>
          <div class="control-item">
            <span class="control-label">Action / Jump</span>
            <div class="control-keys"><kbd>Space</kbd> or <kbd>J</kbd></div>
          </div>
          <div class="control-item">
            <span class="control-label">Aim / Select</span>
            <div class="control-keys"><kbd>Mouse</kbd> / <kbd>Touch</kbd></div>
          </div>
          <div class="control-item">
            <span class="control-label">Pause / Menu</span>
            <div class="control-keys"><kbd>P</kbd> or <kbd>ESC</kbd></div>
          </div>
        </div>
      </article>

      <!-- Pro Tips -->
      <article class="guide-card">
        <div class="guide-card-head">
          <span class="icon">💡</span>
          <h2>Pro Tips &amp; Gameplay Strategies</h2>
        </div>
        <div class="tips-grid">
          <div class="tip-box">
            <h4>1. Use Fullscreen Mode</h4>
            <p>Expand the game frame to avoid accidental misclicks outside the viewport and enhance peripheral reaction speeds.</p>
          </div>
          <div class="tip-box">
            <h4>2. Study Enemy Patterns</h4>
            <p>Pay close attention to obstacle intervals and opponent movement cycles to find the safest counter-attack timing.</p>
          </div>
          <div class="tip-box">
            <h4>3. Smooth Finger Rhythm</h4>
            <p>Avoid panic-tapping keys; smooth, rhythmic taps prevent over-steering and conserve stamina or jump cooldowns.</p>
          </div>
          <div class="tip-box">
            <h4>4. Save Your High Scores</h4>
            <p>Your browser automatically retains local session data. Keep coming back to beat your personal leaderboard records!</p>
          </div>
        </div>
      </article>

      <!-- FAQ -->
      <article class="guide-card">
        <div class="guide-card-head">
          <span class="icon">❓</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="faq-accordion">
          <details class="faq-card" open>
            <summary>Is ${safeTitle} free to play?</summary>
            <p>Yes. <strong>${safeTitle}</strong> is completely free on Games Unblocked Play. No purchases, no hidden subscriptions, and no registrations are ever required.</p>
          </details>
          <details class="faq-card">
            <summary>Can I play ${safeTitle} on a school Chromebook?</summary>
            <p>Yes. This game runs cleanly over standard HTTPS ports and does not rely on third-party executables, making it accessible on school and campus networks.</p>
          </details>
          <details class="faq-card">
            <summary>Does ${safeTitle} support mobile or touch devices?</summary>
            <p>Yes. Most HTML5 titles adapt responsive touch overlays when opened on modern Android and iOS mobile devices.</p>
          </details>
          <details class="faq-card">
            <summary>What should I do if the game doesn't load?</summary>
            <p>Click the <strong>🔄 Reload</strong> button in the game toolbar or check your browser extension settings to ensure third-party frame cookies are allowed.</p>
          </details>
        </div>
      </article>
    </div>

    <!-- Related Games Section -->
    <section class="related-wrap">
      <div class="section-head">
        <h2 class="section-title"><span>🎮 More ${safePrimaryCat} Games You Might Like</span></h2>
        <a href="/all-games.html" class="btn-filter-sort">Browse All Games →</a>
      </div>
      <div class="games-grid">
${relatedCardsHtml}
      </div>
    </section>

    ${getAdsDuoRowHTML()}
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">🎮 GamesUnblocked<span style="color:var(--coral)">PLAY</span></div>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/all-games.html">All Games Directory</a>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="https://convertpdftoword.github.io" target="_blank" rel="noopener" class="partner-link" title="Convert PDFtoWord Online Free">Convert PDFtoWord</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; ${new Date().getFullYear()} Games Unblocked Play. All rights reserved.</div>
      </div>
    </div>
  </footer>

  <!-- Interactive Stage Scripts -->
  <script>
    (function () {
      var frame = document.getElementById('game-frame');
      var loading = document.getElementById('game-loading');
      var viewport = document.getElementById('game-viewport');
      var btnFullscreen = document.getElementById('btn-fullscreen');
      var btnTheater = document.getElementById('btn-theater');
      var btnLights = document.getElementById('btn-lights');
      var lightsOverlay = document.getElementById('lights-overlay');
      var btnReload = document.getElementById('btn-reload');
      var btnFavorite = document.getElementById('btn-favorite');
      var favIcon = document.getElementById('fav-icon');
      var btnShare = document.getElementById('btn-share');

      function hideLoading() {
        if (loading) loading.classList.add('is-hidden');
      }

      if (frame) {
        frame.addEventListener('load', hideLoading);
        window.setTimeout(hideLoading, 3500);
      }

      // Fullscreen
      if (btnFullscreen && viewport) {
        btnFullscreen.addEventListener('click', function () {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else if (viewport.requestFullscreen) {
            viewport.requestFullscreen();
          }
        });
      }

      // Theater Mode
      if (btnTheater && viewport) {
        btnTheater.addEventListener('click', function () {
          viewport.classList.toggle('theater-mode');
          btnTheater.classList.toggle('primary');
        });
      }

      // Lights Off
      var lightsOn = true;
      if (btnLights && lightsOverlay && viewport) {
        btnLights.addEventListener('click', function () {
          lightsOn = !lightsOn;
          if (!lightsOn) {
            lightsOverlay.style.display = 'block';
            viewport.style.zIndex = '5001';
            viewport.style.position = 'relative';
            btnLights.innerHTML = '<span>☀️</span> Lights On';
          } else {
            lightsOverlay.style.display = 'none';
            viewport.style.zIndex = 'auto';
            btnLights.innerHTML = '<span>💡</span> Lights';
          }
        });
      }

      // Reload Frame
      if (btnReload && frame) {
        btnReload.addEventListener('click', function () {
          if (loading) loading.classList.remove('is-hidden');
          frame.src = frame.src;
          window.setTimeout(hideLoading, 3000);
        });
      }

      // Favorites via localStorage
      var favKey = 'fav_${slug}';
      if (localStorage.getItem(favKey)) {
        if (favIcon) favIcon.textContent = '❤️';
      }
      if (btnFavorite && favIcon) {
        btnFavorite.addEventListener('click', function () {
          var isFav = localStorage.getItem(favKey);
          if (isFav) {
            localStorage.removeItem(favKey);
            favIcon.textContent = '🤍';
          } else {
            localStorage.setItem(favKey, '1');
            favIcon.textContent = '❤️';
          }
        });
      }

      // Share Link
      if (btnShare) {
        btnShare.addEventListener('click', function () {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
            btnShare.innerHTML = '<span>✓</span> Copied!';
            window.setTimeout(function () {
              btnShare.innerHTML = '<span>🔗</span> Share';
            }, 2000);
          }
        });
      }
    })();
  </script>

  <script src="/pwa-client.js" defer></script>
  <!-- Histats.com START (async) -->
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
  <!-- Histats.com END -->
</body>
</html>`;
}

// ──── Main Build Execution ─────────────────────────────────
const gameDirs = ['public/game', 'game'];
gameDirs.forEach(gameDir => {
  if (!fs.existsSync(gameDir)) {
    fs.mkdirSync(gameDir, { recursive: true });
  }
});

console.log(`Generating ${games.length} clean static game pages...`);
games.forEach(game => {
  const slug = createSlug(game.title);
  const fileName = `${slug}.html`;
  const html = generateGamePage(game, games);
  gameDirs.forEach(gameDir => {
    const filePath = path.join(gameDir, fileName);
    fs.writeFileSync(filePath, html, 'utf8');
  });
});

console.log('Generating all-games.html directory...');
const allGamesHtml = generateAllGamesIndex(games);
fs.writeFileSync(path.join('public', 'all-games.html'), allGamesHtml, 'utf8');
fs.writeFileSync('all-games.html', allGamesHtml, 'utf8');

console.log(`✅ Completed: Generated ${games.length} game pages and all-games.html with clean pro gaming design!`);

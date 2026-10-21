import './style.css';
import { CATEGORIES, CAT_ICONS, getGameUrl, getThumbUrl } from './games.js';
import { on, navigate, init as initRouter } from './router.js';
import { STATIC_PAGES } from './staticPages.js';
import { initPWA, promptInstall } from './pwa.js';

// ──── Ads ──────────────────────────────────────────────────


const ADSENSE_CLIENT = 'ca-pub-8687742238485131';
const ADSENSE_SLOT_TOP = '8861468349';
const ADSENSE_SLOT_HERO = '6097283217';

function getAdSenseHTML(slot = ADSENSE_SLOT_TOP, comment = 'Iklan Responsive unblockedgames') {
  return `
    <div class="ad-banner-adsense" style="display:block;width:100%;box-sizing:border-box;margin:18px 0;text-align:center;min-height:90px;overflow:hidden;">
      <!-- ${comment} -->
      <ins class="adsbygoogle"
           style="display:block;width:100%;min-height:90px;"
           data-ad-client="${ADSENSE_CLIENT}"
           data-ad-slot="${slot}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>`;
}

function initAdSense() {
  try {
    const uninitialized = document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])');
    uninitialized.forEach(() => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  } catch (err) {
    console.warn('AdSense init error:', err);
  }
}

const ADSENSE_SLOT_300_LEFT = '7132584167';
const ADSENSE_SLOT_300_RIGHT = '9115302567';

function getAdsDuoRowHTML() {
  return `
  <div class="ads-duo-wrap">
    <span class="ads-duo-badge">✨ ADVERTISEMENT</span>
    <div class="ads-duo-row">
      <div class="ad-container-300">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
             crossorigin="anonymous"></script>
        <!-- 300x250_games_kiri -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:300px;height:250px"
             data-ad-client="${ADSENSE_CLIENT}"
             data-ad-slot="${ADSENSE_SLOT_300_LEFT}"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
      <div class="ad-container-300">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
             crossorigin="anonymous"></script>
        <!-- 300x250_games_kanan -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:300px;height:250px"
             data-ad-client="${ADSENSE_CLIENT}"
             data-ad-slot="${ADSENSE_SLOT_300_RIGHT}"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  </div>`;
}

function getSingleAd300HTML(slot, comment = '300x250_ad') {
  return `
  <div class="ad-box-wrapper">
    <span class="ad-subtle-badge">✨ ADVERTISEMENT</span>
    <div class="ad-container-300">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}"
           crossorigin="anonymous"></script>
      <!-- ${comment} -->
      <ins class="adsbygoogle"
           style="display:inline-block;width:300px;height:250px"
           data-ad-client="${ADSENSE_CLIENT}"
           data-ad-slot="${slot}"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  </div>`;
}

// ──── Category Ribbon (Horizontal Top Navigation Bar) ──────
function buildCategoryRibbon() {
  return `
    <nav class="cat-ribbon" aria-label="Quick Category Filter">
      <button class="ribbon-arrow ribbon-arrow-left" id="ribbon-prev" type="button" aria-label="Scroll categories left">‹</button>
      <div class="cat-ribbon-track" id="cat-ribbon-track">
        ${CATEGORIES.map(c => `
          <button type="button" class="ribbon-chip ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}" id="ribbon-${c.id}">
            <span class="chip-icon">${c.emoji}</span>
            <span class="chip-label">${c.shortLabel || c.label}</span>
          </button>
        `).join('')}
      </div>
      <button class="ribbon-arrow ribbon-arrow-right" id="ribbon-next" type="button" aria-label="Scroll categories right">›</button>
    </nav>
  `;
}

// ──── State ────────────────────────────────────────────────
let GAMES = [];
let currentCategory = 'all';
let searchQuery = '';
let visibleCount = 60;

// ──── DOM helper ───────────────────────────────────────────
const $ = id => document.getElementById(id);

// ──── Load game data ───────────────────────────────────────
async function loadGames() {
  const res = await fetch(import.meta.env.BASE_URL + 'games.json');
  GAMES = await res.json();
}

// ──── Category counts ──────────────────────────────────────
function getCatCount(catId) {
  if (catId === 'all') return GAMES.length;
  return GAMES.filter(g => {
    const cs = Array.isArray(g.cat) ? g.cat : [g.cat];
    return cs.includes(catId);
  }).length;
}

// ──── Filter ───────────────────────────────────────────────
function getFiltered() {
  const q = searchQuery.toLowerCase().trim();
  return GAMES.filter(g => {
    const cats = Array.isArray(g.cat) ? g.cat : [g.cat];
    const matchCat = currentCategory === 'all' || cats.includes(currentCategory);
    const matchSearch = !q || g.title.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

// ──── Sidebar HTML ─────────────────────────────────────────
function buildSidebar() {
  return `
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Game categories">
      <div class="sidebar-header">
        <div class="sidebar-header-title">🎮 Categories</div>
        <button class="sidebar-close-btn" id="sidebar-close-btn" type="button" aria-label="Close menu">✕</button>
      </div>
      <div class="sidebar-section-label">All Categories (${GAMES.length || '700+'})</div>
      ${CATEGORIES.map(c => {
        const count = getCatCount(c.id);
        if (count === 0 && c.id !== 'all') return '';
        return `
          <button class="cat-item ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}" id="cat-${c.id}">
            <span class="cat-icon">${c.emoji}</span>
            <span>${c.shortLabel || c.label}</span>
            <span class="cat-count">${count}</span>
          </button>`;
      }).join('')}
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `;
}

// ──── Header HTML ──────────────────────────────────────────
function buildHeader() {
  return `
    <header class="top-header" role="banner">
      <div class="header-logo-wrap">
        <button class="btn-menu" id="btn-menu" type="button" aria-label="Open categories menu">
          <span class="btn-menu-icon">☰</span>
          <span class="btn-menu-label">Categories</span>
        </button>
        <a href="/" class="header-logo route-link" data-route="/">Unblocked<span class="g">Games</span><span class="gplus">G+</span></a>
      </div>
      <div class="header-search">
        <span class="header-search-icon">🔍</span>
        <input type="search" id="search-input" placeholder="Search 700+ unblocked games..."
          autocomplete="off" value="${searchQuery}" aria-label="Search unblocked games G+" />
        <button class="search-clear-btn" id="search-clear" style="display:${searchQuery ? 'flex' : 'none'}" aria-label="Clear search">✕</button>
      </div>
      <div class="header-count-wrap">
        <button class="btn-install-app" id="btn-install-app" type="button" aria-label="Install App" title="Install Unblocked Games G+ as an App">
          <span class="install-icon">📲</span>
          <span class="install-text">Install App</span>
        </button>
        <span class="header-count">${GAMES.length || '700'}+ Games</span>
      </div>
    </header>
  `;
}

// ──── Footer HTML ──────────────────────────────────────────
function buildFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-links">
        <a href="/" class="route-link" data-route="/">Home</a>
        <a href="/?page=about" class="route-link" data-route="/?page=about">About Us</a>
        <a href="/?page=contact" class="route-link" data-route="/?page=contact">Contact</a>
        <a href="/?page=dmca" class="route-link" data-route="/?page=dmca">DMCA</a>
        <a href="/?page=tos" class="route-link" data-route="/?page=tos">Terms of Service</a>
        <a href="/?page=privacy" class="route-link" data-route="/?page=privacy">Privacy Policy</a>
        <a href="/all-games.html">All Games</a>
        <a href="https://convertpdftoword.github.io" target="_blank" rel="noopener" title="Convert PDFtoWord Online Free">Convert PDFtoWord</a>
      </div>
      <div class="footer-copy">
        &copy; ${new Date().getFullYear()} Unblocked Games G+. All rights reserved.
      </div>
    </footer>
  `;
}

// ──── Bind Route Links ─────────────────────────────────────
function bindRouteLinks() {
  document.querySelectorAll('.route-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.getAttribute('data-route'));
      window.scrollTo(0, 0);
    });
  });
}

// ──── SEO Content Helpers ───────────────────────────────────────
const CAT_DESC = {
  Skill:       'skill-based challenges that test your reflexes, timing, and precision',
  Running:     'endless running adventures where speed and agility are key to survival',
  Adventure:   'exciting adventure quests full of exploration, story, and discovery',
  Platform:    'classic platformer gameplay with jumping, dodging, and collecting',
  Car:         'thrilling car games with fast driving, parking challenges, and stunts',
  Racing:      'high-speed racing competitions across tracks, roads, and off-road terrain',
  Moto:        'adrenaline-pumping motorcycle racing and stunt games',
  '3D':        '3D browser games with immersive graphics and gameplay depth',
  Shooting:    'action-packed shooting games with weapons, enemies, and strategy',
  Multiplayer: 'multiplayer games you can enjoy with friends or compete globally',
  Puzzle:      'brain-teasing puzzle challenges that train logic and problem-solving',
  Animal:      'fun animal-themed games featuring pets, wildlife, and cute creatures',
  Simulation:  'realistic simulation experiences from city-building to life sims',
  Management:  'management and strategy games where you build, plan, and optimize',
  Survival:    'intense survival games where every decision keeps you alive',
  Strategy:    'deep strategy games combining planning, tactics, and decision-making',
  Board:       'classic board games reimagined in the browser for instant fun',
  Girls:       'fun and creative games designed for everyone who loves style and creativity',
  '2 Player':  'two-player games perfect for competing or cooperating with a friend',
  Sports:      'sports action games covering football, basketball, tennis, and more',
  Popular:     'the most-played and trending unblocked games loved by millions',
  New:         'the newest HTML5 games freshly added to the collection',
  Stickman:    'hilarious and action-packed stickman fighting and adventure games',
};

function buildGameSeoContent(game, cats) {
  const primaryCat = cats[0] || 'Action';
  const catDescText = CAT_DESC[primaryCat] || 'fun browser games you can play anywhere';
  const catIcon = CAT_ICONS[primaryCat] || '🎮';
  const catTags = cats.map(c => `<span class="game-fact-tag">${CAT_ICONS[c]||'🎮'} ${c}</span>`).join('');

  return `
  <section class="game-seo-wrap">
    <!-- About -->
    <div class="game-seo-card about-card-split">
      <div class="about-card-content">
        <div class="game-seo-card-header">
          <span class="game-seo-icon">🎮</span>
          <h2>About ${game.title}</h2>
        </div>
        <p>
          <strong>${game.title}</strong> is a free unblocked ${primaryCat.toLowerCase()} game available on <strong>Unblocked Games G+</strong>.
          It belongs to the genre of ${catDescText}.
          Play <strong>${game.title} unblocked</strong> directly in your browser &mdash; no downloads,
          no installations, and no registrations required.
        </p>
        <p>
          Whether you&rsquo;re at school, at work, or at home, <strong>Unblocked Games G+</strong> lets you
          enjoy <strong>${game.title}</strong> instantly on any device. This HTML5 game runs smoothly
          on desktop, tablet, and mobile browsers.
        </p>
        <div class="game-facts-row">
          <div class="game-fact-item">
            <span class="game-fact-label">🏷️ Genre</span>
            <div class="game-fact-tags">${catTags}</div>
          </div>
          <div class="game-fact-item">
            <span class="game-fact-label">🖥️ Platform</span>
            <div class="game-fact-tags"><span class="game-fact-tag">🌐 Browser (HTML5)</span><span class="game-fact-tag">📱 Mobile</span></div>
          </div>
          <div class="game-fact-item">
            <span class="game-fact-label">💰 Price</span>
            <div class="game-fact-tags"><span class="game-fact-tag free-tag">✓ 100% Free</span></div>
          </div>
          <div class="game-fact-item">
            <span class="game-fact-label">🔓 Access</span>
            <div class="game-fact-tags"><span class="game-fact-tag">⚡ No Login</span><span class="game-fact-tag">⚡ No Download</span></div>
          </div>
        </div>
      </div>
      <div class="about-card-ad">
        ${getSingleAd300HTML(ADSENSE_SLOT_300_RIGHT, '300x250_games_kanan')}
      </div>
    </div>

    <!-- How to Play -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">📚</span>
        <h2>How to Play ${game.title}</h2>
      </div>
      <p>
        Getting started with <strong>${game.title}</strong> is easy &mdash; just click the game above
        and it will load instantly in your browser. Use your keyboard, mouse, or touch controls
        to interact with the game.
      </p>
      <div class="howto-steps">
        <div class="howto-step">
          <span class="howto-num">1</span>
          <div><strong>Open the Game</strong><br>Click the play area above. The game loads automatically &mdash; no download needed.</div>
        </div>
        <div class="howto-step">
          <span class="howto-num">2</span>
          <div><strong>Learn the Controls</strong><br>Use <kbd>Arrow Keys</kbd> or <kbd>WASD</kbd> to move. Use your mouse or touch screen on mobile.</div>
        </div>
        <div class="howto-step">
          <span class="howto-num">3</span>
          <div><strong>Play &amp; Win</strong><br>Follow in-game instructions to master <strong>${game.title}</strong> and beat your high score!</div>
        </div>
        <div class="howto-step">
          <span class="howto-num">4</span>
          <div><strong>Go Fullscreen</strong><br>Click the <em>Fullscreen</em> button for the best experience on any screen size.</div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">❓</span>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div class="faq-list">
        <details class="faq-item">
          <summary>Is ${game.title} free to play?</summary>
          <p>Yes! <strong>${game.title}</strong> is completely free to play on Unblocked Games G+. No subscription, no payment, no account required.</p>
        </details>
        <details class="faq-item">
          <summary>Can I play ${game.title} at school?</summary>
          <p>Yes. Unblocked Games G+ is designed to work on school and work networks. <strong>${game.title} unblocked</strong> runs directly in your browser without needing any special software.</p>
        </details>
        <details class="faq-item">
          <summary>Does ${game.title} work on mobile?</summary>
          <p>Absolutely. <strong>${game.title}</strong> is an HTML5 game that works on smartphones and tablets, as well as desktop computers, with no app installation needed.</p>
        </details>
        <details class="faq-item">
          <summary>What category is ${game.title}?</summary>
          <p><strong>${game.title}</strong> is categorized as a <strong>${cats.join(' / ')}</strong> game. Browse more ${primaryCat} unblocked games on Unblocked Games G+ using the category sidebar.</p>
        </details>
      </div>
    </div>
  </section>`;
}

// ──── Build home SEO block ───────────────────────────────────────
function buildHomeSeoBlock() {
  return `
  <section class="home-seo-wrap" aria-label="About Unblocked Games G+">
    <div class="home-seo-header">
      <div class="home-seo-badge">🎮 Unblocked Games G+</div>
      <h2 class="home-seo-title">The Best Free Unblocked Games Online</h2>
      <p class="home-seo-sub">Play 700+ HTML5 games instantly &mdash; no download, no login, no barriers.</p>
    </div>

    <div class="home-seo-features">
      <div class="seo-feat">
        <div class="seo-feat-icon">⚡</div>
        <div>
          <strong>Instant Play</strong>
          <p>Click any game and start playing immediately in your browser. Zero waiting, zero setup.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">🔓</div>
        <div>
          <strong>Always Unblocked</strong>
          <p>Works on school chromebooks, work computers, and restricted networks &mdash; guaranteed.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">🎮</div>
        <div>
          <strong>700+ Games</strong>
          <p>Action, racing, puzzle, shooting, multiplayer, sports, and more. New games added regularly.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">📱</div>
        <div>
          <strong>All Devices</strong>
          <p>Play on desktop, tablet, or mobile. Fully responsive HTML5 games that fit any screen.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">👥</div>
        <div>
          <strong>Multiplayer</strong>
          <p>Challenge a friend with 2-player games or compete in online multiplayer titles.</p>
        </div>
      </div>
      <div class="seo-feat">
        <div class="seo-feat-icon">💰</div>
        <div>
          <strong>100% Free</strong>
          <p>No subscriptions, no hidden costs. Unblocked Games G+ is and always will be completely free.</p>
        </div>
      </div>
    </div>

    ${getAdSenseHTML(ADSENSE_SLOT_HERO, 'Iklan Responsive unblockedgames 2')}

    <div class="home-seo-categories">
      <h3>Popular Categories</h3>
        <div class="home-cat-chips">
          ${CATEGORIES.filter(c => c.id !== 'all').slice(0, 12).map(c => {
            const count = getCatCount(c.id);
            return `<a href="/?search=${c.id}" class="home-cat-chip route-link" data-route="/?search=${c.id}" data-cat="${c.id}" id="seo-cat-${c.id}">
              <span class="cat-icon">${c.emoji}</span> ${c.label} <small>(${count})</small>
            </a>`;
          }).join('')}
        </div>
      </div>

    <div class="home-seo-faq">
      <h3>Frequently Asked Questions</h3>
      <div class="faq-list">
        <details class="faq-item" open>
          <summary>What are Unblocked Games G+?</summary>
          <p><strong>Unblocked Games G+</strong> are free HTML5 browser games that can be played anywhere &mdash; including on school or work networks that typically block gaming sites. Our platform hosts 700+ games across all genres, all playable instantly with no download or login required.</p>
        </details>
        <details class="faq-item">
          <summary>Are these games safe to play at school?</summary>
          <p>Yes. All games on Unblocked Games G+ are HTML5-based and run directly in your browser. They do not require any plugins, executables, or external software, making them safe and accessible on most school and corporate networks.</p>
        </details>
        <details class="faq-item">
          <summary>Do I need to create an account?</summary>
          <p>No account, no sign-up, no email &mdash; nothing. Just click a game and play instantly. Unblocked Games G+ is completely open and free for everyone.</p>
        </details>
        <details class="faq-item">
          <summary>What devices support Unblocked Games G+?</summary>
          <p>All games are built with HTML5 and work on Windows, Mac, Linux, Chromebook, iOS, and Android. Whether you use a phone, tablet, or desktop, the games are fully playable.</p>
        </details>
      </div>
    </div>
  </section>`;
}

// ──── Render Home ──────────────────────────────────────────
function renderHome() {
  document.title = 'Unblocked Games G+ | Play 700+ Free Unblocked Games Online';

  const app = $('app');
  app.innerHTML = `
    ${buildHeader()}
    <div class="layout">
      ${buildSidebar()}
      <div class="main-content">
        ${getAdSenseHTML(ADSENSE_SLOT_TOP, 'Iklan Responsive unblockedgames')}
        ${buildCategoryRibbon()}
        <div class="section-header">
          <h1 class="section-title" id="section-title">
            ${currentCategory === 'all' ? '🔥 All Games' : CATEGORIES.find(c=>c.id===currentCategory)?.label || currentCategory}
            <span class="count" id="game-count"></span>
          </h1>
        </div>
        <div class="games-grid" id="games-grid"></div>
        <div class="load-more-wrap" id="load-more-wrap" style="display:none">
          <button class="btn-load-more" id="btn-load-more">Load More Games</button>
        </div>

        ${getAdsDuoRowHTML()}
        ${buildHomeSeoBlock()}
        ${buildFooter()}
      </div>
    </div>
  `;

  // Wire up SEO category chips
  document.querySelectorAll('.home-cat-chip').forEach(chip => {
    chip.addEventListener('click', e => {
      e.preventDefault();
      currentCategory = chip.dataset.cat;
      visibleCount = 60;
      renderHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  bindHomeEvents();
  bindRouteLinks();
  renderGames();
  initAdSense();
}

function getSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/(^-|-$)/g, ''); // Trim leading/trailing hyphens
}

function renderGames() {
  const filtered = getFiltered();
  const grid = $('games-grid');
  const countEl = $('game-count');
  const loadWrap = $('load-more-wrap');
  const titleEl = $('section-title');

  if (countEl) countEl.textContent = `(${filtered.length})`;
  if (titleEl && searchQuery) {
    titleEl.innerHTML = `🔍 Results for "<em>${searchQuery}</em>" <span class="count">(${filtered.length})</span>`;
  } else if (titleEl) {
    const cat = CATEGORIES.find(c => c.id === currentCategory);
    titleEl.innerHTML = `${currentCategory === 'all' ? '🔥 All Games' : cat?.label || currentCategory} <span class="count">(${filtered.length})</span>`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎮</div>
        <h3>No games found</h3>
        <p>Try a different search or category.</p>
        <button class="btn-primary" id="btn-clear-search">Clear Search</button>
      </div>`;
    if (loadWrap) loadWrap.style.display = 'none';
    $('btn-clear-search')?.addEventListener('click', () => {
      searchQuery = '';
      $('search-input').value = '';
      $('search-clear').style.display = 'none';
      renderGames();
    });
    return;
  }

  const toShow = filtered.slice(0, visibleCount);

  grid.innerHTML = toShow.map((g, i) => {
    const catArr = Array.isArray(g.cat) ? g.cat : [g.cat];
    const primaryCat = catArr[0] || '';
    const icon = CAT_ICONS[primaryCat] || '🎮';
    const playSlug = getSlug(g.title);
    return `
      <a class="game-card game-card-link" href="/game/${playSlug}.html" data-id="${g.id}" data-slug="${playSlug}" style="animation-delay:${Math.min(i, 30) * 20}ms" aria-label="Play ${g.title}">
        <div class="card-thumb">
          <img
            src="${getThumbUrl(g)}"
            alt="${g.title}"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(g.title.slice(0,20))}'"
          />
          <div class="card-overlay">
            <button class="btn-play" tabindex="-1">▶ Play</button>
          </div>
        </div>
        <div class="card-info">
          <div class="card-title">${g.title}</div>
          <div class="card-cat-tag">${icon} ${primaryCat}</div>
        </div>
      </a>`;
  }).join('');

  if (loadWrap) loadWrap.style.display = filtered.length > visibleCount ? 'flex' : 'none';
}

// ──── Bind Home Events ─────────────────────────────────────
function bindHomeEvents() {
  // Search
  $('search-input')?.addEventListener('input', e => {
    searchQuery = e.target.value;
    $('search-clear').style.display = searchQuery ? 'flex' : 'none';
    visibleCount = 60;
    renderGames();
  });
  $('search-clear')?.addEventListener('click', () => {
    searchQuery = '';
    $('search-input').value = '';
    $('search-clear').style.display = 'none';
    renderGames();
  });

  function setCategory(catId) {
    currentCategory = catId;
    visibleCount = 60;
    document.querySelectorAll('.cat-item').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === currentCategory);
    });
    document.querySelectorAll('.ribbon-chip').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === currentCategory);
    });
    renderGames();
  }

  // Category sidebar
  document.querySelector('.sidebar')?.addEventListener('click', e => {
    const btn = e.target.closest('.cat-item');
    if (!btn) return;
    setCategory(btn.dataset.cat);
    // Close drawer
    $('sidebar')?.classList.remove('open');
    $('sidebar-overlay')?.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Category ribbon (Horizontal Pills)
  document.querySelector('.cat-ribbon')?.addEventListener('click', e => {
    const chip = e.target.closest('.ribbon-chip');
    if (!chip) return;
    setCategory(chip.dataset.cat);
    $('section-title')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Ribbon scroll arrows
  $('ribbon-prev')?.addEventListener('click', () => {
    $('cat-ribbon-track')?.scrollBy({ left: -240, behavior: 'smooth' });
  });
  $('ribbon-next')?.addEventListener('click', () => {
    $('cat-ribbon-track')?.scrollBy({ left: 240, behavior: 'smooth' });
  });

  // Load more
  $('btn-load-more')?.addEventListener('click', () => {
    visibleCount += 60;
    renderGames();
  });

  // Mobile / Drawer menu
  $('btn-menu')?.addEventListener('click', () => {
    $('sidebar')?.classList.toggle('open');
    $('sidebar-overlay')?.classList.toggle('open');
  });
  $('sidebar-close-btn')?.addEventListener('click', () => {
    $('sidebar')?.classList.remove('open');
    $('sidebar-overlay')?.classList.remove('open');
  });
  $('sidebar-overlay')?.addEventListener('click', () => {
    $('sidebar')?.classList.remove('open');
    $('sidebar-overlay')?.classList.remove('open');
  });
}

// ──── Play Page ────────────────────────────────────────────
function renderPlay({ id }) {
  const game = GAMES.find(g => g.id === id);
  if (!game) { navigate('/'); return; }

  const gameUrl = getGameUrl(game);
  const cats = Array.isArray(game.cat) ? game.cat : [game.cat];
  const primaryCat = cats[0];

  document.title = `Play ${game.title} Unblocked | Unblocked Games G+`;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) { metaDesc = document.createElement('meta'); metaDesc.name = 'description'; document.head.appendChild(metaDesc); }
  metaDesc.content = `Play ${game.title} unblocked free online on Unblocked Games G+. No download, no login. Free ${primaryCat} HTML5 game — works at school, work, or home on any device.`;

  const related = GAMES
    .filter(g => g.id !== game.id && (Array.isArray(g.cat) ? g.cat.includes(primaryCat) : g.cat === primaryCat))
    .slice(0, 12);

  $('app').innerHTML = `
    ${buildHeader()}
    <div class="layout">
      ${buildSidebar()}
      <div class="main-content">
        ${getAdSenseHTML('Iklan Responsive unblockedgames - Top Banner')}
        <div class="play-page">
          <div class="play-header">
            <button class="btn-back" id="btn-back">← Back</button>
            <div class="play-info">
              <h1 class="play-game-title">Play ${game.title} Unblocked</h1>
              <div class="play-cats">
                ${cats.map(c=>`<span class="play-cat-tag">${CAT_ICONS[c]||'🎮'} ${c}</span>`).join('')}
              </div>
            </div>
            <button class="btn-fullscreen" id="btn-fullscreen">⛶ Fullscreen</button>
          </div>
          <div class="game-container" id="game-container">
            <div class="game-loading" id="game-loading">
              <div class="spinner" style="width:48px;height:48px;border-width:4px;"></div>
              <p>Loading <strong>${game.title}</strong>...</p>
            </div>
            <iframe id="game-frame" src="${gameUrl}"
              title="Play ${game.title} Unblocked | Unblocked Games G+"
              allowfullscreen frameborder="0"
              allow="fullscreen; autoplay; encrypted-media; gamepad"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-top-navigation allow-modals"
            ></iframe>
          </div>
          <div class="hero-row">
            <div class="hero-thumb">
              <img src="${getThumbUrl(game)}" alt="${game.title} unblocked" loading="lazy" decoding="async"
                onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(game.title.slice(0,20))}'" />
              <div class="hero-copy">
                <h2>${game.title}</h2>
                <p>Play <strong>${game.title}</strong> unblocked free online on Unblocked Games G+. No download, no login required. Enjoy instant browser gaming on desktop and mobile.</p>
              </div>
            </div>
            <div class="hero-ad-slot">
              ${getSingleAd300HTML(ADSENSE_SLOT_300_LEFT, '300x250_games_kiri')}
            </div>
          </div>
          ${buildGameSeoContent(game, cats)}
          ${related.length ? `
          <div class="related-section">
            <div class="related-section-header">
              <h2 class="section-title">🎮 More ${primaryCat} Unblocked Games</h2>
            </div>
            <div class="related-grid" id="related-grid">
              ${related.map(g => `
                <a class="game-card game-card-link mini" href="/game/${getSlug(g.title)}.html" data-id="${g.id}" data-slug="${getSlug(g.title)}" aria-label="Play ${g.title} unblocked">
                  <div class="card-thumb">
                    <img src="${getThumbUrl(g)}" alt="${g.title} unblocked" loading="lazy" decoding="async"
                      onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(g.title.slice(0,20))}'" />
                    <div class="card-overlay"><button class="btn-play" tabindex="-1">▶ Play</button></div>
                  </div>
                  <div class="card-info"><div class="card-title">${g.title}</div></div>
                </a>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>
  `;

  $('game-frame')?.addEventListener('load', () => { $('game-loading').style.display = 'none'; });
  $('btn-back')?.addEventListener('click', () => {
    navigate('/');
  });

  $('btn-fullscreen')?.addEventListener('click', () => {
    const c = $('game-container');
    document.fullscreenElement ? document.exitFullscreen() : c?.requestFullscreen();
  });
  $('btn-menu')?.addEventListener('click', () => {
    $('sidebar')?.classList.toggle('open');
    $('sidebar-overlay')?.classList.toggle('open');
  });
  $('sidebar-close-btn')?.addEventListener('click', () => {
    $('sidebar')?.classList.remove('open');
    $('sidebar-overlay')?.classList.remove('open');
  });
  $('sidebar-overlay')?.addEventListener('click', () => {
    $('sidebar')?.classList.remove('open');
    $('sidebar-overlay')?.classList.remove('open');
  });
  document.querySelector('.sidebar')?.addEventListener('click', e => {
    const btn = e.target.closest('.cat-item');
    if (!btn) return;
    currentCategory = btn.dataset.cat;
    visibleCount = 60;
    navigate('/');
  });
  bindRouteLinks();
  initAdSense();
}

// ──── Static Page ────────────────────────────────────────────
function renderStaticPage({ id }) {
  const page = STATIC_PAGES[id];
  if (!page) { navigate('/'); return; }

  document.title = `${page.title} | Unblocked Games G+`;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `Read our ${page.title} policy at Unblocked Games G+.`;

  $('app').innerHTML = `
    ${buildHeader()}
    <div class="layout">
      ${buildSidebar()}
      <div class="main-content">
        <div class="static-page-container">
          <div class="static-card">
            ${page.content}
          </div>
        </div>
        ${buildFooter()}
      </div>
    </div>
  `;

  bindHomeEvents();
  bindRouteLinks();
}

// ──── Routes ───────────────────────────────────────────────
on('/', () => renderHome());
on('/play', ({ id }) => renderPlay({ id }));
on('/page', ({ id }) => renderStaticPage({ id }));

// ──── Boot ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  $('app').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;background:#08051a;">
      <div class="spinner" style="width:48px;height:48px;border-width:4px;"></div>
      <p style="color:#9ca3af;font-family:Inter,sans-serif;font-size:0.95rem;">Loading Unblocked Games G+...</p>
    </div>`;
  await loadGames();
  initRouter();
  initPWA();
});

document.addEventListener('click', e => {
  if (e.target.closest('#btn-install-app')) {
    promptInstall();
  }
});



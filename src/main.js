import './style.css';
import { CATEGORIES, CAT_ICONS, getGameUrl, getThumbUrl } from './games.js';
import { on, navigate, init as initRouter } from './router.js';
import { STATIC_PAGES } from './staticPages.js';
import { initPWA, promptInstall } from './pwa.js';

// ──── AdSense Configuration (Preserved) ─────────────────────
const ADSENSE_CLIENT = 'ca-pub-8687742238485131';
const ADSENSE_SLOT_TOP = '8861468349';
const ADSENSE_SLOT_HERO = '6097283217';
const ADSENSE_SLOT_300_LEFT = '7132584167';
const ADSENSE_SLOT_300_RIGHT = '9115302567';

function getAdSenseHTML(slot = ADSENSE_SLOT_TOP, comment = 'Responsive Game Ad') {
  return `
    <div class="ad-banner-adsense">
      <span class="ad-subtle-badge">✨ ADVERTISEMENT</span>
      <!-- ${comment} -->
      <ins class="adsbygoogle"
           style="display:block;width:100%;min-height:90px;"
           data-ad-client="${ADSENSE_CLIENT}"
           data-ad-slot="${slot}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>`;
}

function getAdsDuoRowHTML() {
  return `
    <div class="ads-duo-wrap">
      <span class="ads-duo-badge">✨ ADVERTISEMENT</span>
      <div class="ads-duo-row">
        <div class="ad-container-300">
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="${ADSENSE_CLIENT}"
               data-ad-slot="${ADSENSE_SLOT_300_LEFT}"></ins>
        </div>
        <div class="ad-container-300">
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="${ADSENSE_CLIENT}"
               data-ad-slot="${ADSENSE_SLOT_300_RIGHT}"></ins>
        </div>
      </div>
    </div>`;
}

function getSingleAd300HTML(slot = ADSENSE_SLOT_300_LEFT, comment = '300x250_ad') {
  return `
    <div class="ad-box-wrapper">
      <span class="ad-subtle-badge">✨ ADVERTISEMENT</span>
      <div class="ad-container-300">
        <!-- ${comment} -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:300px;height:250px"
             data-ad-client="${ADSENSE_CLIENT}"
             data-ad-slot="${slot}"></ins>
      </div>
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

// ──── Application State ─────────────────────────────────────
let GAMES = [];
let currentCategory = 'all';
let searchQuery = '';
let visibleCount = 60;

const $ = id => document.getElementById(id);

function getSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');
}

async function loadGames() {
  const res = await fetch(import.meta.env.BASE_URL + 'games.json');
  GAMES = await res.json();
}

function getCatCount(catId) {
  if (catId === 'all') return GAMES.length;
  return GAMES.filter(g => {
    const cs = Array.isArray(g.cat) ? g.cat : [g.cat];
    return cs.includes(catId);
  }).length;
}

function getFiltered() {
  const q = searchQuery.toLowerCase().trim();
  return GAMES.filter(g => {
    const cats = Array.isArray(g.cat) ? g.cat : [g.cat];
    const matchCat = currentCategory === 'all' || cats.includes(currentCategory);
    const matchSearch = !q || g.title.toLowerCase().includes(q) || (g.cat && String(g.cat).toLowerCase().includes(q));
    return matchCat && matchSearch;
  });
}

// ──── Header Component ──────────────────────────────────────
function buildHeader() {
  return `
    <header class="top-header" role="banner">
      <div class="header-inner">
        <div class="brand-wrap">
          <a href="/" class="brand-logo route-link" data-route="/">
            <span class="brand-icon">🎮</span>
            <span class="brand-highlight">GamesUnblocked</span><span class="brand-play">PLAY</span>
          </a>
        </div>

        <div class="search-container">
          <div class="search-input-wrap">
            <span class="search-icon">🔍</span>
            <input type="search" id="search-input" class="search-input"
              placeholder="Search free unblocked games (Press '/' to focus)..."
              autocomplete="off" value="${searchQuery}" aria-label="Search unblocked games" />
            <button class="search-clear-btn ${searchQuery ? 'visible' : ''}" id="search-clear" type="button" aria-label="Clear search">✕</button>
          </div>
        </div>

        <div class="header-actions">
          <button type="button" class="btn-nav" id="btn-random-game" title="Pick a random game to play">
            <span>🎲</span> Random
          </button>
          <a href="/all-games.html" class="btn-nav">
            <span>📚</span> All Games
          </a>
          <button class="btn-pwa-install" id="btn-install-app" type="button" aria-label="Install App" title="Install Games Unblocked Play App">
            <span>📲</span> Install
          </button>
        </div>
      </div>
    </header>
  `;
}

// ──── Category Ribbon ───────────────────────────────────────
function buildCategoryRibbon() {
  return `
    <div class="cat-ribbon-container">
      <nav class="cat-ribbon" aria-label="Category Navigation">
        <button class="ribbon-arrow" id="ribbon-prev" type="button" aria-label="Scroll left">‹</button>
        <div class="cat-ribbon-track" id="cat-ribbon-track">
          ${CATEGORIES.map(c => `
            <button type="button" class="ribbon-chip ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}" id="ribbon-${c.id}">
              <span>${c.emoji}</span>
              <span>${c.shortLabel || c.label}</span>
            </button>
          `).join('')}
        </div>
        <button class="ribbon-arrow" id="ribbon-next" type="button" aria-label="Scroll right">›</button>
      </nav>
    </div>
  `;
}

// ──── Hero Component ────────────────────────────────────────
function buildHero() {
  if (currentCategory !== 'all' || searchQuery) return '';
  return `
    <section class="hero-section">
      <div class="hero-box">
        <div class="hero-content">
          <div class="hero-badge">⚡ Instant Browser Gameplay &bull; 100% Unblocked</div>
          <h1 class="hero-title">Play Free Online <span class="highlight">Unblocked Games</span></h1>
          <p class="hero-desc">
            Welcome to <strong>Games Unblocked Play</strong>, your premier destination for high-speed, lag-free HTML5 and WebGL browser games. Play directly with zero downloads, no blocked proxies, and 60 FPS performance on Chromebooks, PC, and mobile!
          </p>
          <div class="hero-features">
            <div class="hero-feat-tag"><span>✓</span> Hundreds of Free Titles</div>
            <div class="hero-feat-tag"><span>✓</span> No Downloads Required</div>
            <div class="hero-feat-tag"><span>✓</span> Chromebook &amp; School Friendly</div>
            <div class="hero-feat-tag"><span>✓</span> 100% Free Forever</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ──── Home SEO Knowledge Section ────────────────────────────
function buildHomeSeoBlock() {
  return `
    <section class="gameplay-guide-wrap" aria-label="About Games Unblocked Play">
      <div class="guide-card">
        <div class="guide-card-head">
          <span class="icon">🎮</span>
          <h2>Play Unblocked Games Anywhere, Anytime</h2>
        </div>
        <p>
          <strong>Games Unblocked Play</strong> was engineered for players who crave instant gaming entertainment without network filters, firewalls, or cumbersome downloads. Our portal curates the finest HTML5, WebGL, and JavaScript games available today, thoroughly tested for compatibility on school Chromebooks, library computers, and home setups.
        </p>
        <p>
          From high-adrenaline racing and tactical shooters to brain-testing logic puzzles and competitive 2-player multiplayer showdowns, our ever-growing catalog delivers seamless play with responsive controls and ultra-crisp audio.
        </p>

        <div class="specs-matrix">
          <div class="spec-cell">
            <div class="spec-title">⚡ Access Protocol</div>
            <div class="spec-value green">Pure HTML5 / Zero Install</div>
          </div>
          <div class="spec-cell">
            <div class="spec-title">📱 Cross-Platform</div>
            <div class="spec-value">PC, Mac, Chromebook, Mobile</div>
          </div>
          <div class="spec-cell">
            <div class="spec-title">🕹️ Supported Controls</div>
            <div class="spec-value">Keyboard, Mouse, Touch, Gamepad</div>
          </div>
          <div class="spec-cell">
            <div class="spec-title">💰 Price Model</div>
            <div class="spec-value green">100% Free Forever</div>
          </div>
        </div>
      </div>

      ${getAdSenseHTML(ADSENSE_SLOT_HERO, 'Responsive In-Content Ad')}

      <div class="guide-card">
        <div class="guide-card-head">
          <span class="icon">❓</span>
          <h2>Frequently Asked Questions About Games Unblocked Play</h2>
        </div>
        <div class="faq-accordion">
          <details class="faq-card" open>
            <summary>What is Games Unblocked Play?</summary>
            <p><strong>Games Unblocked Play</strong> is an open-access web gaming catalog featuring a massive library of browser games that run without restrictions. It uses modern HTML5 technology to bypass network firewalls commonly encountered in educational institutions and workplaces.</p>
          </details>
          <details class="faq-card">
            <summary>Are these games safe and legal to play?</summary>
            <p>Yes. All titles on Games Unblocked Play execute safely inside sandboxed browser iframes without downloading executables or invasive plugins to your machine.</p>
          </details>
          <details class="faq-card">
            <summary>How do I achieve full-screen gameplay?</summary>
            <p>Every individual game page features a dedicated <strong>Fullscreen</strong> toggle and <strong>Theater Mode</strong> button directly above the game canvas for an immersive gaming experience.</p>
          </details>
          <details class="faq-card">
            <summary>Do games work on mobile and Chromebooks?</summary>
            <p>Yes. Over 90% of our game catalog offers native touch controls or responsive keyboard inputs optimized specifically for touchscreens and Google Chromebooks.</p>
          </details>
        </div>
      </div>
    </section>
  `;
}

// ──── Footer Component ──────────────────────────────────────
function buildFooter() {
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-top">
          <div class="footer-brand">
            🎮 GamesUnblocked<span style="color:var(--coral)">PLAY</span>
          </div>
          <div class="footer-links">
            <a href="/" class="route-link" data-route="/">Home</a>
            <a href="/all-games.html">All Games Directory</a>
            <a href="/?page=about" class="route-link" data-route="/?page=about">About Us</a>
            <a href="/?page=contact" class="route-link" data-route="/?page=contact">Contact</a>
            <a href="/?page=dmca" class="route-link" data-route="/?page=dmca">DMCA</a>
            <a href="/?page=tos" class="route-link" data-route="/?page=tos">Terms of Service</a>
            <a href="/?page=privacy" class="route-link" data-route="/?page=privacy">Privacy Policy</a>
            <a href="/sitemap.xml" target="_blank">Sitemap</a>
            <a href="https://convertpdftoword.github.io" target="_blank" rel="noopener" class="partner-link" title="Convert PDFtoWord Online Free">Convert PDFtoWord</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div>&copy; ${new Date().getFullYear()} Games Unblocked Play. All rights reserved.</div>
          <div class="footer-disclaimer">
            All registered trademarks, game titles, and assets belong to their respective publishers and developers. Games Unblocked Play provides browser indexing and compatibility emulation.
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ──── Render Home View ──────────────────────────────────────
function renderHome() {
  document.title = 'Games Unblocked Play | Play Free Online Unblocked Games';

  const app = $('app');
  app.innerHTML = `
    ${buildHeader()}
    ${buildCategoryRibbon()}
    ${buildHero()}
    <main class="app-shell" role="main">
      ${getAdSenseHTML(ADSENSE_SLOT_TOP, 'Top Banner Leaderboard')}
      
      <div class="section-head">
        <h2 class="section-title" id="section-title">
          <span>${currentCategory === 'all' ? '🎮 All Games' : (() => { const c = CATEGORIES.find(x => x.id === currentCategory); return c ? `${c.emoji} ${c.label}` : currentCategory; })()}</span>
          <span class="section-count" id="game-count"></span>
        </h2>
        <div class="section-filter-actions">
          <button class="btn-filter-sort active" id="sort-popular" type="button">🔥 Popular</button>
          <button class="btn-filter-sort" id="sort-az" type="button">🔤 A-Z</button>
        </div>
      </div>

      <div class="games-grid" id="games-grid"></div>

      <div class="load-more-wrap" id="load-more-wrap" style="display:none">
        <button class="btn-load-more" id="btn-load-more" type="button">
          <span>⚡</span> Load More Games
        </button>
      </div>

      ${getAdsDuoRowHTML()}
      ${buildHomeSeoBlock()}
    </main>
    ${buildFooter()}
  `;

  bindHomeEvents();
  bindRouteLinks();
  renderGames();
  initAdSense();
}

let currentSort = 'popular';

function renderGames() {
  let filtered = getFiltered();
  
  if (currentSort === 'az') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }

  const grid = $('games-grid');
  const countEl = $('game-count');
  const loadWrap = $('load-more-wrap');
  const titleEl = $('section-title');

  if (countEl) countEl.textContent = `${filtered.length} Games`;

  if (titleEl && searchQuery) {
    titleEl.innerHTML = `<span>🔍 Search: "${searchQuery}"</span> <span class="section-count">${filtered.length} Found</span>`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🎮</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px; color: #fff;">No games found</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">We couldn't find any games matching "${searchQuery}".</p>
        <button class="btn-tool primary" id="btn-reset-filter" type="button">View All Games</button>
      </div>`;
    if (loadWrap) loadWrap.style.display = 'none';
    $('btn-reset-filter')?.addEventListener('click', () => {
      searchQuery = '';
      currentCategory = 'all';
      renderHome();
    });
    return;
  }

  const toShow = filtered.slice(0, visibleCount);

  grid.innerHTML = toShow.map((g, i) => {
    const cats = Array.isArray(g.cat) ? g.cat : [g.cat];
    const primaryCat = cats[0] || 'Game';
    const playSlug = getSlug(g.title);
    const thumbUrl = getThumbUrl(g);

    // Pseudorandom realistic rating based on game id
    const rating = (4.7 + ((g.id * 17) % 30) / 100).toFixed(1);

    return `
      <a class="game-card" href="/game/${playSlug}.html" data-id="${g.id}" aria-label="Play ${g.title} unblocked">
        <div class="card-media">
          <img class="card-img"
            src="${thumbUrl}"
            alt="${g.title}"
            loading="lazy"
            decoding="async"
            width="280"
            height="210"
            onerror="this.onerror=null;this.src='https://placehold.co/280x210/111827/00e5ff?text=${encodeURIComponent(g.title.slice(0, 18))}'"
          />
          <div class="card-rating-badge">★ ${rating}</div>
          <div class="card-hover-overlay">
            <span class="card-play-btn">▶ PLAY NOW</span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-title">${g.title}</div>
          <div class="card-meta">
            <span class="card-cat">${primaryCat}</span>
            <span class="card-status">Unblocked</span>
          </div>
        </div>
      </a>
    `;
  }).join('');

  if (loadWrap) loadWrap.style.display = filtered.length > visibleCount ? 'flex' : 'none';
}

function bindHomeEvents() {
  const searchInput = $('search-input');
  const searchClear = $('search-clear');

  searchInput?.addEventListener('input', e => {
    searchQuery = e.target.value;
    if (searchClear) searchClear.classList.toggle('visible', !!searchQuery);
    visibleCount = 60;
    renderGames();
  });

  searchClear?.addEventListener('click', () => {
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    searchClear.classList.remove('visible');
    renderGames();
  });

  // Hotkey '/' to focus search
  window.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // Random Game button
  $('btn-random-game')?.addEventListener('click', () => {
    if (GAMES.length > 0) {
      const randomIndex = Math.floor(Math.random() * GAMES.length);
      const randomGame = GAMES[randomIndex];
      window.location.href = `/game/${getSlug(randomGame.title)}.html`;
    }
  });

  // Sort buttons
  $('sort-popular')?.addEventListener('click', () => {
    currentSort = 'popular';
    $('sort-popular').classList.add('active');
    $('sort-az').classList.remove('active');
    renderGames();
  });

  $('sort-az')?.addEventListener('click', () => {
    currentSort = 'az';
    $('sort-az').classList.add('active');
    $('sort-popular').classList.remove('active');
    renderGames();
  });

  // Category ribbon chips
  document.querySelector('.cat-ribbon')?.addEventListener('click', e => {
    const chip = e.target.closest('.ribbon-chip');
    if (!chip) return;
    currentCategory = chip.dataset.cat;
    visibleCount = 60;
    document.querySelectorAll('.ribbon-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.cat === currentCategory);
    });
    renderGames();
    $('section-title')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Ribbon scroll arrows
  $('ribbon-prev')?.addEventListener('click', () => {
    $('cat-ribbon-track')?.scrollBy({ left: -280, behavior: 'smooth' });
  });
  $('ribbon-next')?.addEventListener('click', () => {
    $('cat-ribbon-track')?.scrollBy({ left: 280, behavior: 'smooth' });
  });

  // Load more games
  $('btn-load-more')?.addEventListener('click', () => {
    visibleCount += 60;
    renderGames();
  });
}

function bindRouteLinks() {
  document.querySelectorAll('.route-link').forEach(link => {
    link.addEventListener('click', e => {
      const route = link.getAttribute('data-route');
      if (route && (route.startsWith('/') || route.startsWith('/?'))) {
        e.preventDefault();
        navigate(route);
        window.scrollTo(0, 0);
      }
    });
  });
}

// ──── Render Static Pages (About, Contact, etc) ─────────────
function renderStaticPage({ id }) {
  const page = STATIC_PAGES[id];
  if (!page) { navigate('/'); return; }

  document.title = `${page.title} - Games Unblocked Play`;

  $('app').innerHTML = `
    ${buildHeader()}
    ${buildCategoryRibbon()}
    <main class="app-shell" role="main">
      <div class="static-page-box">
        <h1>${page.title}</h1>
        ${page.content}
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border);">
          <a href="/" class="btn-tool primary route-link" data-route="/">← Return to Games Catalog</a>
        </div>
      </div>
    </main>
    ${buildFooter()}
  `;

  bindHomeEvents();
  bindRouteLinks();
}

// ──── Routes ────────────────────────────────────────────────
on('/', () => renderHome());
on('/page', ({ id }) => renderStaticPage({ id }));

// ──── Bootstrap Application ─────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  $('app').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;background:#0a0d14;">
      <div class="spinner"></div>
      <p style="color:#94a3b8;font-family:'Outfit',sans-serif;font-weight:600;font-size:1rem;">Loading Games Unblocked Play...</p>
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

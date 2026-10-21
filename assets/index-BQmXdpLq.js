(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return`/img/class-${e.id}.webp`}var t=[{id:`all`,emoji:`🎮`,label:`All Games`,shortLabel:`All Games`},{id:`Popular`,emoji:`🔥`,label:`Popular`,shortLabel:`Popular`},{id:`New`,emoji:`🆕`,label:`New`,shortLabel:`New`},{id:`Skill`,emoji:`🧠`,label:`Skill`,shortLabel:`Skill`},{id:`Running`,emoji:`🏃`,label:`Running`,shortLabel:`Running`},{id:`Adventure`,emoji:`🗺️`,label:`Adventure`,shortLabel:`Adventure`},{id:`Platform`,emoji:`🕹️`,label:`Platform`,shortLabel:`Platform`},{id:`Car`,emoji:`🏎️`,label:`Car`,shortLabel:`Car`},{id:`Racing`,emoji:`🏁`,label:`Racing`,shortLabel:`Racing`},{id:`Moto`,emoji:`🏍️`,label:`Moto`,shortLabel:`Moto`},{id:`3D`,emoji:`🎲`,label:`3D`,shortLabel:`3D`},{id:`Shooting`,emoji:`🎯`,label:`Shooting`,shortLabel:`Shooting`},{id:`Multiplayer`,emoji:`👥`,label:`Multiplayer`,shortLabel:`Multiplayer`},{id:`2 Player`,emoji:`🤝`,label:`2 Player`,shortLabel:`2 Player`},{id:`Sports`,emoji:`⚽`,label:`Sports`,shortLabel:`Sports`},{id:`Puzzle`,emoji:`🧩`,label:`Puzzle`,shortLabel:`Puzzle`},{id:`Animal`,emoji:`🐾`,label:`Animal`,shortLabel:`Animal`},{id:`Stickman`,emoji:`🥊`,label:`Stickman`,shortLabel:`Stickman`},{id:`Simulation`,emoji:`🖥️`,label:`Simulation`,shortLabel:`Simulation`},{id:`Management`,emoji:`🏗️`,label:`Management`,shortLabel:`Management`},{id:`Survival`,emoji:`🌿`,label:`Survival`,shortLabel:`Survival`},{id:`Strategy`,emoji:`♟️`,label:`Strategy`,shortLabel:`Strategy`},{id:`Board`,emoji:`♜`,label:`Board`,shortLabel:`Board`},{id:`Girls`,emoji:`💖`,label:`Girls`,shortLabel:`Girls`}],n={};function r(e,t){n[e]=t}function i(e){history.pushState(null,``,e),a()}function a(){let e=new URLSearchParams(window.location.search);if(e.has(`play`)){let t=e.get(`play`).split(`-`);t[0],t.slice(1).join(`-`),window.location.href=`/game/${slug}.html`;return}else if(e.has(`page`)){let t=e.get(`page`);n[`/page`]&&n[`/page`]({id:t})}else n[`/`]&&n[`/`]({})}function o(){window.addEventListener(`popstate`,a),a()}var s={about:{title:`About Us`,content:`
      <h2>Welcome to Games Unblocked Play</h2>
      <p><strong>Games Unblocked Play</strong> is an ultra-fast, modern browser gaming portal crafted for players looking for zero-latency, high-performance HTML5 games with zero installation requirements.</p>
      <p>We feature an expansive library of hand-curated unblocked games across popular genres including Action, Driving & Racing, 2-Player, 3D, Shooting, Puzzle, and Skill. Our primary objective is to deliver an uninterrupted, safe, and lightning-fast gaming platform accessible from school, office, or home on PC, Chromebook, tablet, and mobile devices.</p>
      <p>Every title in our collection runs in pure HTML5/WebGL, tested for smooth 60 FPS performance without requiring Adobe Flash or risky browser extensions.</p>
    `},contact:{title:`Contact Us`,content:`
      <h2>Get in Touch with Games Unblocked Play</h2>
      <p>Have suggestions, game requests, or technical feedback? Our team is always ready to assist you!</p>
      <ul>
        <li><strong>Email:</strong> admin@gamesunblockedplay.github.io</li>
        <li><strong>Response Time:</strong> We review all inquiries within 24 to 48 hours.</li>
        <li><strong>Game Requests:</strong> Looking for a specific unblocked game? Share the game title and we will analyze compatibility for our library.</li>
      </ul>
    `},tos:{title:`Terms of Service`,content:`
      <h2>Terms of Service</h2>
      <p>By visiting and playing on <strong>Games Unblocked Play</strong>, you agree to the following terms and guidelines:</p>
      <ol>
        <li><strong>Personal Entertainment:</strong> All browser games are provided free of charge for non-commercial, personal entertainment purposes.</li>
        <li><strong>Service Availability:</strong> We continuously optimize server infrastructure for 99.9% uptime, but availability of individual external game mirrors may vary.</li>
        <li><strong>Intellectual Property:</strong> Games showcased belong to their respective developers and licensors. Games Unblocked Play provides curated indexing and browser emulation support.</li>
      </ol>
      <p>We reserve the right to update these terms to reflect infrastructure and policy enhancements.</p>
    `},privacy:{title:`Privacy Policy`,content:`
      <h2>Privacy Policy</h2>
      <p>Your online privacy and data protection are core priorities at <strong>Games Unblocked Play</strong>:</p>
      <ul>
        <li><strong>Zero Account Tracking:</strong> You can play any game without creating an account or providing personal details.</li>
        <li><strong>Local Storage:</strong> We use safe client-side browser storage exclusively for saving your gameplay high scores, favorites, and visual settings (such as Theater Mode).</li>
        <li><strong>Advertisements & Analytics:</strong> Third-party ad partners (such as Google AdSense) and analytics tools (Histats, Ahrefs) may serve contextual ads and monitor traffic metrics to maintain our free service.</li>
      </ul>
    `},dmca:{title:`DMCA Copyright`,content:`
      <h2>DMCA Takedown & Copyright Policy</h2>
      <p><strong>Games Unblocked Play</strong> complies fully with the Digital Millennium Copyright Act (DMCA). We respect original content creators and copyright holders.</p>
      <p>If you represent a copyright owner and believe material indexed on our portal infringes your rights, please contact our designated agent at <strong>admin@gamesunblockedplay.github.io</strong> with:</p>
      <ul>
        <li>Identification of the copyrighted game or material.</li>
        <li>Exact URL link(s) on our portal hosting or referencing the file.</li>
        <li>Contact information and a verified statement of good-faith ownership.</li>
      </ul>
      <p>Valid notices are processed swiftly and infringing links will be disabled within 48 hours.</p>
    `}},c=null;function l(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).then(e=>{e.addEventListener(`updatefound`,()=>{let t=e.installing;t?.addEventListener(`statechange`,()=>{t.state===`installed`&&navigator.serviceWorker.controller&&console.log(`[PWA] New version available.`)})})}).catch(e=>{console.warn(`[PWA] SW registration error:`,e)})});let e=window.matchMedia(`(display-mode: standalone)`).matches||window.navigator.standalone===!0;if(e){if(console.log(`[PWA] Running in standalone app mode`),d(!1),!window.location.search.includes(`utm_source=`))try{let e=new URL(window.location.href);e.searchParams.set(`utm_source`,`pwa`),e.searchParams.set(`utm_medium`,`app`),window.history.replaceState(null,``,e.toString())}catch{}return}window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),c=e,setTimeout(()=>{f()},2500)}),setTimeout(()=>{!e&&localStorage.getItem(`pwa_prompt_dismissed`)!==`1`&&f()},4e3),window.addEventListener(`appinstalled`,()=>{console.log(`[PWA] App installed successfully`),c=null,d(!1),p()})}function u(){if(!c){alert(`To install Games Unblocked Play:
• On Chrome/Edge: Click the install icon (⊕) in the browser address bar.
• On iPhone/iPad: Tap Share and choose "Add to Home Screen".
• On Android: Tap Menu (⋮) and choose "Install App" or "Add to Home Screen".`);return}c.prompt(),c.userChoice.then(e=>{e.outcome===`accepted`&&(console.log(`[PWA] User accepted the install prompt`),d(!1),p()),c=null})}function d(e){document.querySelectorAll(`.btn-install-app`).forEach(t=>{e?t.style.display=`inline-flex`:t.style.display=`none`})}function f(){if(localStorage.getItem(`pwa_prompt_dismissed`)===`1`||document.getElementById(`pwa-install-banner`))return;let e=document.createElement(`div`);e.id=`pwa-install-banner`,e.className=`pwa-install-banner`,e.innerHTML=`
    <img src="/icon-192.png" alt="Games Unblocked Play" class="pwa-banner-icon" />
    <div class="pwa-banner-content">
      <div class="pwa-banner-title">Install Games Unblocked Play</div>
      <div class="pwa-banner-desc">Play all unblocked games directly in fullscreen with zero address bar lag!</div>
    </div>
    <div class="pwa-banner-actions">
      <button class="pwa-btn-install" id="pwa-banner-install-btn">📲 Install</button>
      <button class="pwa-btn-close" id="pwa-banner-close-btn" aria-label="Dismiss">✕</button>
    </div>
  `,document.body.appendChild(e),document.getElementById(`pwa-banner-install-btn`)?.addEventListener(`click`,()=>{u()}),document.getElementById(`pwa-banner-close-btn`)?.addEventListener(`click`,()=>{p(),localStorage.setItem(`pwa_prompt_dismissed`,`1`)})}function p(){let e=document.getElementById(`pwa-install-banner`);e&&(e.style.opacity=`0`,e.style.transform=`translateY(20px)`,e.style.transition=`all 0.3s ease`,setTimeout(()=>e.remove(),300))}var m=`ca-pub-8687742238485131`,h=`8861468349`,g=`6097283217`,_=`7132584167`,v=`9115302567`;function y(e=h,t=`Responsive Game Ad`){return`
    <div class="ad-banner-adsense">
      <span class="ad-subtle-badge">✨ ADVERTISEMENT</span>
      <!-- ${t} -->
      <ins class="adsbygoogle"
           style="display:block;width:100%;min-height:90px;"
           data-ad-client="${m}"
           data-ad-slot="${e}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>`}function b(){return`
    <div class="ads-duo-wrap">
      <span class="ads-duo-badge">✨ ADVERTISEMENT</span>
      <div class="ads-duo-row">
        <div class="ad-container-300">
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="${m}"
               data-ad-slot="${_}"></ins>
        </div>
        <div class="ad-container-300">
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="${m}"
               data-ad-slot="${v}"></ins>
        </div>
      </div>
    </div>`}function x(){try{document.querySelectorAll(`.adsbygoogle:not([data-adsbygoogle-status])`).forEach(()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(e){console.warn(`AdSense init error:`,e)}}var S=[],C=`all`,w=``,T=60,E=e=>document.getElementById(e);function D(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).replace(/(^-|-$)/g,``)}async function O(){S=await(await fetch(`/games.json`)).json()}function k(){let e=w.toLowerCase().trim();return S.filter(t=>{let n=Array.isArray(t.cat)?t.cat:[t.cat],r=C===`all`||n.includes(C),i=!e||t.title.toLowerCase().includes(e)||t.cat&&String(t.cat).toLowerCase().includes(e);return r&&i})}function A(){return`
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
              autocomplete="off" value="${w}" aria-label="Search unblocked games" />
            <button class="search-clear-btn ${w?`visible`:``}" id="search-clear" type="button" aria-label="Clear search">✕</button>
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
  `}function j(){return`
    <div class="cat-ribbon-container">
      <nav class="cat-ribbon" aria-label="Category Navigation">
        <button class="ribbon-arrow" id="ribbon-prev" type="button" aria-label="Scroll left">‹</button>
        <div class="cat-ribbon-track" id="cat-ribbon-track">
          ${t.map(e=>`
            <button type="button" class="ribbon-chip ${C===e.id?`active`:``}" data-cat="${e.id}" id="ribbon-${e.id}">
              <span>${e.emoji}</span>
              <span>${e.shortLabel||e.label}</span>
            </button>
          `).join(``)}
        </div>
        <button class="ribbon-arrow" id="ribbon-next" type="button" aria-label="Scroll right">›</button>
      </nav>
    </div>
  `}function M(){return C!==`all`||w?``:`
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
  `}function N(){return`
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

      ${y(g,`Responsive In-Content Ad`)}

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
  `}function P(){return`
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
  `}function F(){document.title=`Games Unblocked Play | Play Free Online Unblocked Games`;let e=E(`app`);e.innerHTML=`
    ${A()}
    ${j()}
    ${M()}
    <main class="app-shell" role="main">
      ${y(h,`Top Banner Leaderboard`)}
      
      <div class="section-head">
        <h2 class="section-title" id="section-title">
          <span>${C===`all`?`🎮 All Games`:(()=>{let e=t.find(e=>e.id===C);return e?`${e.emoji} ${e.label}`:C})()}</span>
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

      ${b()}
      ${N()}
    </main>
    ${P()}
  `,R(),z(),L(),x()}var I=`popular`;function L(){let t=k();I===`az`&&(t=[...t].sort((e,t)=>e.title.localeCompare(t.title)));let n=E(`games-grid`),r=E(`game-count`),i=E(`load-more-wrap`),a=E(`section-title`);if(r&&(r.textContent=`${t.length} Games`),a&&w&&(a.innerHTML=`<span>🔍 Search: "${w}"</span> <span class="section-count">${t.length} Found</span>`),t.length===0){n.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border);">
        <div style="font-size: 3rem; margin-bottom: 12px;">🎮</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px; color: #fff;">No games found</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">We couldn't find any games matching "${w}".</p>
        <button class="btn-tool primary" id="btn-reset-filter" type="button">View All Games</button>
      </div>`,i&&(i.style.display=`none`),E(`btn-reset-filter`)?.addEventListener(`click`,()=>{w=``,C=`all`,F()});return}n.innerHTML=t.slice(0,T).map((t,n)=>{let r=(Array.isArray(t.cat)?t.cat:[t.cat])[0]||`Game`,i=D(t.title),a=e(t),o=(4.7+t.id*17%30/100).toFixed(1);return`
      <a class="game-card" href="/game/${i}.html" data-id="${t.id}" aria-label="Play ${t.title} unblocked">
        <div class="card-media">
          <img class="card-img"
            src="${a}"
            alt="${t.title}"
            loading="lazy"
            decoding="async"
            width="280"
            height="210"
            onerror="this.onerror=null;this.src='https://placehold.co/280x210/111827/00e5ff?text=${encodeURIComponent(t.title.slice(0,18))}'"
          />
          <div class="card-rating-badge">★ ${o}</div>
          <div class="card-hover-overlay">
            <span class="card-play-btn">▶ PLAY NOW</span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-title">${t.title}</div>
          <div class="card-meta">
            <span class="card-cat">${r}</span>
            <span class="card-status">Unblocked</span>
          </div>
        </div>
      </a>
    `}).join(``),i&&(i.style.display=t.length>T?`flex`:`none`)}function R(){let e=E(`search-input`),t=E(`search-clear`);e?.addEventListener(`input`,e=>{w=e.target.value,t&&t.classList.toggle(`visible`,!!w),T=60,L()}),t?.addEventListener(`click`,()=>{w=``,e&&(e.value=``),t.classList.remove(`visible`),L()}),window.addEventListener(`keydown`,t=>{t.key===`/`&&document.activeElement!==e&&(t.preventDefault(),e?.focus())}),E(`btn-random-game`)?.addEventListener(`click`,()=>{if(S.length>0){let e=Math.floor(Math.random()*S.length),t=S[e];window.location.href=`/game/${D(t.title)}.html`}}),E(`sort-popular`)?.addEventListener(`click`,()=>{I=`popular`,E(`sort-popular`).classList.add(`active`),E(`sort-az`).classList.remove(`active`),L()}),E(`sort-az`)?.addEventListener(`click`,()=>{I=`az`,E(`sort-az`).classList.add(`active`),E(`sort-popular`).classList.remove(`active`),L()}),document.querySelector(`.cat-ribbon`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.ribbon-chip`);t&&(C=t.dataset.cat,T=60,document.querySelectorAll(`.ribbon-chip`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cat===C)}),L(),E(`section-title`)?.scrollIntoView({behavior:`smooth`,block:`nearest`}))}),E(`ribbon-prev`)?.addEventListener(`click`,()=>{E(`cat-ribbon-track`)?.scrollBy({left:-280,behavior:`smooth`})}),E(`ribbon-next`)?.addEventListener(`click`,()=>{E(`cat-ribbon-track`)?.scrollBy({left:280,behavior:`smooth`})}),E(`btn-load-more`)?.addEventListener(`click`,()=>{T+=60,L()})}function z(){document.querySelectorAll(`.route-link`).forEach(e=>{e.addEventListener(`click`,t=>{let n=e.getAttribute(`data-route`);n&&(n.startsWith(`/`)||n.startsWith(`/?`))&&(t.preventDefault(),i(n),window.scrollTo(0,0))})})}function B({id:e}){let t=s[e];if(!t){i(`/`);return}document.title=`${t.title} - Games Unblocked Play`,E(`app`).innerHTML=`
    ${A()}
    ${j()}
    <main class="app-shell" role="main">
      <div class="static-page-box">
        <h1>${t.title}</h1>
        ${t.content}
        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--border);">
          <a href="/" class="btn-tool primary route-link" data-route="/">← Return to Games Catalog</a>
        </div>
      </div>
    </main>
    ${P()}
  `,R(),z()}r(`/`,()=>F()),r(`/page`,({id:e})=>B({id:e})),document.addEventListener(`DOMContentLoaded`,async()=>{E(`app`).innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;background:#0a0d14;">
      <div class="spinner"></div>
      <p style="color:#94a3b8;font-family:'Outfit',sans-serif;font-weight:600;font-size:1rem;">Loading Games Unblocked Play...</p>
    </div>`,await O(),o(),l()}),document.addEventListener(`click`,e=>{e.target.closest(`#btn-install-app`)&&u()});
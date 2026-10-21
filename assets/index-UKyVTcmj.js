(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return e.gameUrl||`https://inkyedu118.github.io/g50/class-${e.id}/`}function t(e){return`/img/class-${e.id}.webp`}var n={Popular:`🔥`,New:`🆕`,Running:`🏃`,"3D":`🎲`,Shooting:`🎯`,Multiplayer:`👥`,Racing:`🏁`,Moto:`🏍️`,Stickman:`🥊`,Adventure:`🗺️`,Puzzle:`🧩`,Animal:`🐾`,Platform:`🕹️`,Simulation:`🖥️`,Management:`🏗️`,Survival:`🌿`,Strategy:`♟️`,Board:`♜`,Girls:`💖`,"2 Player":`🤝`,Car:`🏎️`,Sports:`⚽`,Skill:`🧠`},r=[{id:`all`,emoji:`🎮`,label:`🎮 All Games`,shortLabel:`All Games`},{id:`Popular`,emoji:`🔥`,label:`🔥 Popular`,shortLabel:`Popular`},{id:`New`,emoji:`🆕`,label:`🆕 New`,shortLabel:`New`},{id:`Skill`,emoji:`🧠`,label:`🧠 Skill`,shortLabel:`Skill`},{id:`Running`,emoji:`🏃`,label:`🏃 Running`,shortLabel:`Running`},{id:`Adventure`,emoji:`🗺️`,label:`🗺️ Adventure`,shortLabel:`Adventure`},{id:`Platform`,emoji:`🕹️`,label:`🕹️ Platform`,shortLabel:`Platform`},{id:`Car`,emoji:`🏎️`,label:`🏎️ Car`,shortLabel:`Car`},{id:`Racing`,emoji:`🏁`,label:`🏁 Racing`,shortLabel:`Racing`},{id:`Moto`,emoji:`🏍️`,label:`🏍️ Moto`,shortLabel:`Moto`},{id:`3D`,emoji:`🎲`,label:`🎲 3D`,shortLabel:`3D`},{id:`Shooting`,emoji:`🎯`,label:`🎯 Shooting`,shortLabel:`Shooting`},{id:`Multiplayer`,emoji:`👥`,label:`👥 Multiplayer`,shortLabel:`Multiplayer`},{id:`2 Player`,emoji:`🤝`,label:`🤝 2 Player`,shortLabel:`2 Player`},{id:`Sports`,emoji:`⚽`,label:`⚽ Sports`,shortLabel:`Sports`},{id:`Puzzle`,emoji:`🧩`,label:`🧩 Puzzle`,shortLabel:`Puzzle`},{id:`Animal`,emoji:`🐾`,label:`🐾 Animal`,shortLabel:`Animal`},{id:`Stickman`,emoji:`🥊`,label:`🥊 Stickman`,shortLabel:`Stickman`},{id:`Simulation`,emoji:`🖥️`,label:`🖥️ Simulation`,shortLabel:`Simulation`},{id:`Management`,emoji:`🏗️`,label:`🏗️ Management`,shortLabel:`Management`},{id:`Survival`,emoji:`🌿`,label:`🌿 Survival`,shortLabel:`Survival`},{id:`Strategy`,emoji:`♟️`,label:`♟️ Strategy`,shortLabel:`Strategy`},{id:`Board`,emoji:`♜`,label:`♜ Board`,shortLabel:`Board`},{id:`Girls`,emoji:`💖`,label:`💖 Girls`,shortLabel:`Girls`}],i={};function a(e,t){i[e]=t}function o(e){history.pushState(null,``,e),s()}function s(){let e=new URLSearchParams(window.location.search);if(e.has(`play`)){let t=e.get(`play`).split(`-`);t[0];let n=t.slice(1).join(`-`).toLowerCase().replace(/[^a-z0-9\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).replace(/(^-|-$)/g,``);window.location.href=`https://unblockgamegplus.github.io/game/${n}.html`;return}else if(e.has(`page`)){let t=e.get(`page`);i[`/page`]&&i[`/page`]({id:t})}else i[`/`]&&i[`/`]({})}function c(){window.addEventListener(`popstate`,s),s()}var l={about:{title:`About Us`,content:`
      <h2>Welcome to Unblocked Games G+</h2>
      <p>Unblocked Games G+ is your ultimate premium gaming portal, designed from the ground up to offer the most seamless, high-performance HTML5 browser gaming experience available today.</p>
      <p>We host over 700+ hand-picked unblocked games spanning action, puzzle, driving, platformer, and multiplayer genres. Our mission is to provide an uninterrupted, zero-install, and completely free gaming environment that bypasses strict network filters, making it the perfect platform for students and workers on a quick break.</p>
      <p>With an ever-growing library and hyper-fast loading speeds, Unblocked Games G+ brings you the games you love directly to your browser.</p>
    `},contact:{title:`Contact Us`,content:`
      <h2>Get in Touch</h2>
      <p>Have a question, feedback, or a game request? We'd love to hear from you!</p>
      <ul>
        <li><strong>Email:</strong> admin@unblockgamegplus.github.io</li>
        <li><strong>Support:</strong> Our team aims to respond to all technical queries within 48 hours.</li>
        <li><strong>Game Requests:</strong> Want a specific game unblocked? Send us the title and we'll do our best to add it to our library.</li>
      </ul>
    `},tos:{title:`Terms of Service`,content:`
      <h2>Terms of Service</h2>
      <p>By accessing and using Unblocked Games G+, you agree to be bound by the following terms:</p>
      <ol>
        <li><strong>Usage:</strong> Our games are provided for personal, non-commercial entertainment purposes only.</li>
        <li><strong>Availability:</strong> While we strive for 100% uptime, we do not guarantee uninterrupted access to all games.</li>
        <li><strong>Content Liability:</strong> Games hosted on this site belong to their respective creators. We act solely as a portal index.</li>
      </ol>
      <p>These terms are subject to change without prior notice.</p>
    `},privacy:{title:`Privacy Policy`,content:`
      <h2>Privacy Policy</h2>
      <p>Your privacy is important to us. Here is how we handle your data:</p>
      <ul>
        <li><strong>Data Collection:</strong> We do not require account registration or collect personal identifiable information (PII) to play games.</li>
        <li><strong>Cookies & Local Storage:</strong> We use minimal browser storage to save your game progress and interface preferences (like Dark Mode or Sidebar state).</li>
        <li><strong>Third-party Analytics:</strong> We use tools like Histats to monitor traffic and improve our website performance securely.</li>
      </ul>
    `},dmca:{title:`DMCA Copyright`,content:`
      <h2>DMCA Takedown Policy</h2>
      <p>Unblocked Games G+ respects intellectual property rights. If you believe your copyrighted work has been infringed upon, please submit a formal DMCA claim to us.</p>
      <p>To file a takedown request, please email <strong>admin@unblockgamegplus.github.io</strong> with:</p>
      <ul>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>The exact URL of the material you want removed.</li>
        <li>Your contact information and a statement of good faith belief.</li>
      </ul>
      <p>We process all valid requests promptly and will remove infringing materials immediately upon verification.</p>
    `}},u=null;function d(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/sw.js`).then(e=>{e.addEventListener(`updatefound`,()=>{let t=e.installing;t?.addEventListener(`statechange`,()=>{t.state===`installed`&&navigator.serviceWorker.controller&&console.log(`[PWA] New version available.`)})})}).catch(e=>{console.warn(`[PWA] SW registration error:`,e)})});let e=window.matchMedia(`(display-mode: standalone)`).matches||window.navigator.standalone===!0;if(e){if(console.log(`[PWA] Running in standalone app mode`),p(!1),!window.location.search.includes(`utm_source=`))try{let e=new URL(window.location.href);e.searchParams.set(`utm_source`,`pwa`),e.searchParams.set(`utm_medium`,`app`),window.history.replaceState(null,``,e.toString())}catch{}return}window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),u=e,setTimeout(()=>{m()},2500)}),setTimeout(()=>{!e&&localStorage.getItem(`pwa_prompt_dismissed`)!==`1`&&m()},4e3),window.addEventListener(`appinstalled`,()=>{console.log(`[PWA] App installed successfully`),u=null,p(!1),h()})}function f(){if(!u){alert(`To install Unblocked Games G+:
• On Chrome/Edge: Click the install icon (⊕) in the browser address bar.
• On iPhone/iPad: Tap Share and choose "Add to Home Screen".
• On Android: Tap Menu (⋮) and choose "Install App" or "Add to Home Screen".`);return}u.prompt(),u.userChoice.then(e=>{e.outcome===`accepted`&&(console.log(`[PWA] User accepted the install prompt`),p(!1),h()),u=null})}function p(e){document.querySelectorAll(`.btn-install-app`).forEach(t=>{e?t.style.display=`inline-flex`:t.style.display=`none`})}function m(){if(localStorage.getItem(`pwa_prompt_dismissed`)===`1`||document.getElementById(`pwa-install-banner`))return;let e=document.createElement(`div`);e.id=`pwa-install-banner`,e.className=`pwa-install-banner`,e.innerHTML=`
    <img src="/icon-192.png" alt="Unblocked Games G+" class="pwa-banner-icon" />
    <div class="pwa-banner-content">
      <div class="pwa-banner-title">Install Unblocked Games G+</div>
      <div class="pwa-banner-desc">Play 700+ games directly from your desktop or phone, full screen without browser bars!</div>
    </div>
    <div class="pwa-banner-actions">
      <button class="pwa-btn-install" id="pwa-banner-install-btn">📲 Install</button>
      <button class="pwa-btn-close" id="pwa-banner-close-btn" aria-label="Dismiss">✕</button>
    </div>
  `,document.body.appendChild(e),document.getElementById(`pwa-banner-install-btn`)?.addEventListener(`click`,()=>{f()}),document.getElementById(`pwa-banner-close-btn`)?.addEventListener(`click`,()=>{h(),localStorage.setItem(`pwa_prompt_dismissed`,`1`)})}function h(){let e=document.getElementById(`pwa-install-banner`);e&&(e.style.opacity=`0`,e.style.transform=`translateY(20px)`,e.style.transition=`all 0.3s ease`,setTimeout(()=>e.remove(),300))}var g=`ca-pub-8687742238485131`,_=`8861468349`,v=`6097283217`;function y(e=_,t=`Iklan Responsive unblockedgames`){return`
    <div class="ad-banner-adsense" style="display:block;width:100%;box-sizing:border-box;margin:18px 0;text-align:center;min-height:90px;overflow:hidden;">
      <!-- ${t} -->
      <ins class="adsbygoogle"
           style="display:block;width:100%;min-height:90px;"
           data-ad-client="${g}"
           data-ad-slot="${e}"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>`}function b(){try{document.querySelectorAll(`.adsbygoogle:not([data-adsbygoogle-status])`).forEach(()=>{(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(e){console.warn(`AdSense init error:`,e)}}var x=`7132584167`,S=`9115302567`;function C(){return`
  <div class="ads-duo-wrap">
    <span class="ads-duo-badge">✨ ADVERTISEMENT</span>
    <div class="ads-duo-row">
      <div class="ad-container-300">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${g}"
             crossorigin="anonymous"><\/script>
        <!-- 300x250_games_kiri -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:300px;height:250px"
             data-ad-client="${g}"
             data-ad-slot="${x}"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        <\/script>
      </div>
      <div class="ad-container-300">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${g}"
             crossorigin="anonymous"><\/script>
        <!-- 300x250_games_kanan -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:300px;height:250px"
             data-ad-client="${g}"
             data-ad-slot="${S}"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        <\/script>
      </div>
    </div>
  </div>`}function w(){return`
    <nav class="cat-ribbon" aria-label="Quick Category Filter">
      <button class="ribbon-arrow ribbon-arrow-left" id="ribbon-prev" type="button" aria-label="Scroll categories left">‹</button>
      <div class="cat-ribbon-track" id="cat-ribbon-track">
        ${r.map(e=>`
          <button type="button" class="ribbon-chip ${E===e.id?`active`:``}" data-cat="${e.id}" id="ribbon-${e.id}">
            <span class="chip-icon">${e.emoji}</span>
            <span class="chip-label">${e.shortLabel||e.label}</span>
          </button>
        `).join(``)}
      </div>
      <button class="ribbon-arrow ribbon-arrow-right" id="ribbon-next" type="button" aria-label="Scroll categories right">›</button>
    </nav>
  `}var T=[],E=`all`,D=``,O=60,k=e=>document.getElementById(e);async function A(){T=await(await fetch(`/games.json`)).json()}function j(e){return e===`all`?T.length:T.filter(t=>(Array.isArray(t.cat)?t.cat:[t.cat]).includes(e)).length}function M(){let e=D.toLowerCase().trim();return T.filter(t=>{let n=Array.isArray(t.cat)?t.cat:[t.cat],r=E===`all`||n.includes(E),i=!e||t.title.toLowerCase().includes(e);return r&&i})}function N(){return`
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Game categories">
      <div class="sidebar-header">
        <div class="sidebar-header-title">🎮 Categories</div>
        <button class="sidebar-close-btn" id="sidebar-close-btn" type="button" aria-label="Close menu">✕</button>
      </div>
      <div class="sidebar-section-label">All Categories (${T.length||`700+`})</div>
      ${r.map(e=>{let t=j(e.id);return t===0&&e.id!==`all`?``:`
          <button class="cat-item ${E===e.id?`active`:``}" data-cat="${e.id}" id="cat-${e.id}">
            <span class="cat-icon">${e.emoji}</span>
            <span>${e.shortLabel||e.label}</span>
            <span class="cat-count">${t}</span>
          </button>`}).join(``)}
    </aside>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
  `}function P(){return`
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
          autocomplete="off" value="${D}" aria-label="Search unblocked games G+" />
        <button class="search-clear-btn" id="search-clear" style="display:${D?`flex`:`none`}" aria-label="Clear search">✕</button>
      </div>
      <div class="header-count-wrap">
        <button class="btn-install-app" id="btn-install-app" type="button" aria-label="Install App" title="Install Unblocked Games G+ as an App">
          <span class="install-icon">📲</span>
          <span class="install-text">Install App</span>
        </button>
        <span class="header-count">${T.length||`700`}+ Games</span>
      </div>
    </header>
  `}function F(){return`
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
  `}function I(){document.querySelectorAll(`.route-link`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),o(e.getAttribute(`data-route`)),window.scrollTo(0,0)})})}var L={Skill:`skill-based challenges that test your reflexes, timing, and precision`,Running:`endless running adventures where speed and agility are key to survival`,Adventure:`exciting adventure quests full of exploration, story, and discovery`,Platform:`classic platformer gameplay with jumping, dodging, and collecting`,Car:`thrilling car games with fast driving, parking challenges, and stunts`,Racing:`high-speed racing competitions across tracks, roads, and off-road terrain`,Moto:`adrenaline-pumping motorcycle racing and stunt games`,"3D":`3D browser games with immersive graphics and gameplay depth`,Shooting:`action-packed shooting games with weapons, enemies, and strategy`,Multiplayer:`multiplayer games you can enjoy with friends or compete globally`,Puzzle:`brain-teasing puzzle challenges that train logic and problem-solving`,Animal:`fun animal-themed games featuring pets, wildlife, and cute creatures`,Simulation:`realistic simulation experiences from city-building to life sims`,Management:`management and strategy games where you build, plan, and optimize`,Survival:`intense survival games where every decision keeps you alive`,Strategy:`deep strategy games combining planning, tactics, and decision-making`,Board:`classic board games reimagined in the browser for instant fun`,Girls:`fun and creative games designed for everyone who loves style and creativity`,"2 Player":`two-player games perfect for competing or cooperating with a friend`,Sports:`sports action games covering football, basketball, tennis, and more`,Popular:`the most-played and trending unblocked games loved by millions`,New:`the newest HTML5 games freshly added to the collection`,Stickman:`hilarious and action-packed stickman fighting and adventure games`};function R(e,t){let r=t[0]||`Action`,i=L[r]||`fun browser games you can play anywhere`;n[r];let a=t.map(e=>`<span class="game-fact-tag">${n[e]||`🎮`} ${e}</span>`).join(``);return`
  <section class="game-seo-wrap">
    <!-- About -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">🎮</span>
        <h2>About ${e.title}</h2>
      </div>
      <p>
        <strong>${e.title}</strong> is a free unblocked ${r.toLowerCase()} game available on <strong>Unblocked Games G+</strong>.
        It belongs to the genre of ${i}.
        Play <strong>${e.title} unblocked</strong> directly in your browser &mdash; no downloads,
        no installations, and no registrations required.
      </p>
      <p>
        Whether you&rsquo;re at school, at work, or at home, <strong>Unblocked Games G+</strong> lets you
        enjoy <strong>${e.title}</strong> instantly on any device. This HTML5 game runs smoothly
        on desktop, tablet, and mobile browsers.
      </p>
      <div class="game-facts-row">
        <div class="game-fact-item">
          <span class="game-fact-label">🏷️ Genre</span>
          <div class="game-fact-tags">${a}</div>
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

    ${C()}

    <!-- How to Play -->
    <div class="game-seo-card">
      <div class="game-seo-card-header">
        <span class="game-seo-icon">📚</span>
        <h2>How to Play ${e.title}</h2>
      </div>
      <p>
        Getting started with <strong>${e.title}</strong> is easy &mdash; just click the game above
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
          <div><strong>Play &amp; Win</strong><br>Follow in-game instructions to master <strong>${e.title}</strong> and beat your high score!</div>
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
          <summary>Is ${e.title} free to play?</summary>
          <p>Yes! <strong>${e.title}</strong> is completely free to play on Unblocked Games G+. No subscription, no payment, no account required.</p>
        </details>
        <details class="faq-item">
          <summary>Can I play ${e.title} at school?</summary>
          <p>Yes. Unblocked Games G+ is designed to work on school and work networks. <strong>${e.title} unblocked</strong> runs directly in your browser without needing any special software.</p>
        </details>
        <details class="faq-item">
          <summary>Does ${e.title} work on mobile?</summary>
          <p>Absolutely. <strong>${e.title}</strong> is an HTML5 game that works on smartphones and tablets, as well as desktop computers, with no app installation needed.</p>
        </details>
        <details class="faq-item">
          <summary>What category is ${e.title}?</summary>
          <p><strong>${e.title}</strong> is categorized as a <strong>${t.join(` / `)}</strong> game. Browse more ${r} unblocked games on Unblocked Games G+ using the category sidebar.</p>
        </details>
      </div>
    </div>
  </section>`}function z(){return`
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

    ${y(v,`Iklan Responsive unblockedgames 2`)}

    <div class="home-seo-categories">
      <h3>Popular Categories</h3>
        <div class="home-cat-chips">
          ${r.filter(e=>e.id!==`all`).slice(0,12).map(e=>{let t=j(e.id);return`<a href="/?search=${e.id}" class="home-cat-chip route-link" data-route="/?search=${e.id}" data-cat="${e.id}" id="seo-cat-${e.id}">
              <span class="cat-icon">${e.emoji}</span> ${e.label} <small>(${t})</small>
            </a>`}).join(``)}
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
  </section>`}function B(){document.title=`Unblocked Games G+ | Play 700+ Free Unblocked Games Online`;let e=k(`app`);e.innerHTML=`
    ${P()}
    <div class="layout">
      ${N()}
      <div class="main-content">
        ${y(_,`Iklan Responsive unblockedgames`)}
        ${w()}
        <div class="section-header">
          <h1 class="section-title" id="section-title">
            ${E===`all`?`🔥 All Games`:r.find(e=>e.id===E)?.label||E}
            <span class="count" id="game-count"></span>
          </h1>
        </div>
        <div class="games-grid" id="games-grid"></div>
        <div class="load-more-wrap" id="load-more-wrap" style="display:none">
          <button class="btn-load-more" id="btn-load-more">Load More Games</button>
        </div>

        ${C()}
        ${z()}
        ${F()}
      </div>
    </div>
  `,document.querySelectorAll(`.home-cat-chip`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),E=e.dataset.cat,O=60,B(),window.scrollTo({top:0,behavior:`smooth`})})}),U(),I(),H(),b()}function V(e){return e.toLowerCase().replace(/[^a-z0-9\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).replace(/(^-|-$)/g,``)}function H(){let e=M(),i=k(`games-grid`),a=k(`game-count`),o=k(`load-more-wrap`),s=k(`section-title`);if(a&&(a.textContent=`(${e.length})`),s&&D)s.innerHTML=`🔍 Results for "<em>${D}</em>" <span class="count">(${e.length})</span>`;else if(s){let t=r.find(e=>e.id===E);s.innerHTML=`${E===`all`?`🔥 All Games`:t?.label||E} <span class="count">(${e.length})</span>`}if(e.length===0){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🎮</div>
        <h3>No games found</h3>
        <p>Try a different search or category.</p>
        <button class="btn-primary" id="btn-clear-search">Clear Search</button>
      </div>`,o&&(o.style.display=`none`),k(`btn-clear-search`)?.addEventListener(`click`,()=>{D=``,k(`search-input`).value=``,k(`search-clear`).style.display=`none`,H()});return}i.innerHTML=e.slice(0,O).map((e,r)=>{let i=(Array.isArray(e.cat)?e.cat:[e.cat])[0]||``,a=n[i]||`🎮`,o=V(e.title);return`
      <a class="game-card game-card-link" href="/game/${o}.html" data-id="${e.id}" data-slug="${o}" style="animation-delay:${Math.min(r,30)*20}ms" aria-label="Play ${e.title}">
        <div class="card-thumb">
          <img
            src="${t(e)}"
            alt="${e.title}"
            loading="lazy"
            decoding="async"
            onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(e.title.slice(0,20))}'"
          />
          <div class="card-overlay">
            <button class="btn-play" tabindex="-1">▶ Play</button>
          </div>
        </div>
        <div class="card-info">
          <div class="card-title">${e.title}</div>
          <div class="card-cat-tag">${a} ${i}</div>
        </div>
      </a>`}).join(``),o&&(o.style.display=e.length>O?`flex`:`none`)}function U(){k(`search-input`)?.addEventListener(`input`,e=>{D=e.target.value,k(`search-clear`).style.display=D?`flex`:`none`,O=60,H()}),k(`search-clear`)?.addEventListener(`click`,()=>{D=``,k(`search-input`).value=``,k(`search-clear`).style.display=`none`,H()});function e(e){E=e,O=60,document.querySelectorAll(`.cat-item`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cat===E)}),document.querySelectorAll(`.ribbon-chip`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cat===E)}),H()}document.querySelector(`.sidebar`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.cat-item`);n&&(e(n.dataset.cat),k(`sidebar`)?.classList.remove(`open`),k(`sidebar-overlay`)?.classList.remove(`open`),window.scrollTo({top:0,behavior:`smooth`}))}),document.querySelector(`.cat-ribbon`)?.addEventListener(`click`,t=>{let n=t.target.closest(`.ribbon-chip`);n&&(e(n.dataset.cat),k(`section-title`)?.scrollIntoView({behavior:`smooth`,block:`nearest`}))}),k(`ribbon-prev`)?.addEventListener(`click`,()=>{k(`cat-ribbon-track`)?.scrollBy({left:-240,behavior:`smooth`})}),k(`ribbon-next`)?.addEventListener(`click`,()=>{k(`cat-ribbon-track`)?.scrollBy({left:240,behavior:`smooth`})}),k(`btn-load-more`)?.addEventListener(`click`,()=>{O+=60,H()}),k(`btn-menu`)?.addEventListener(`click`,()=>{k(`sidebar`)?.classList.toggle(`open`),k(`sidebar-overlay`)?.classList.toggle(`open`)}),k(`sidebar-close-btn`)?.addEventListener(`click`,()=>{k(`sidebar`)?.classList.remove(`open`),k(`sidebar-overlay`)?.classList.remove(`open`)}),k(`sidebar-overlay`)?.addEventListener(`click`,()=>{k(`sidebar`)?.classList.remove(`open`),k(`sidebar-overlay`)?.classList.remove(`open`)})}function W({id:r}){let i=T.find(e=>e.id===r);if(!i){o(`/`);return}let a=e(i),s=Array.isArray(i.cat)?i.cat:[i.cat],c=s[0];document.title=`Play ${i.title} Unblocked | Unblocked Games G+`;let l=document.querySelector(`meta[name="description"]`);l||(l=document.createElement(`meta`),l.name=`description`,document.head.appendChild(l)),l.content=`Play ${i.title} unblocked free online on Unblocked Games G+. No download, no login. Free ${c} HTML5 game — works at school, work, or home on any device.`;let u=T.filter(e=>e.id!==i.id&&(Array.isArray(e.cat)?e.cat.includes(c):e.cat===c)).slice(0,12);k(`app`).innerHTML=`
    ${P()}
    <div class="layout">
      ${N()}
      <div class="main-content">
        ${y(`Iklan Responsive unblockedgames - Top Banner`)}
        <div class="play-page">
          <div class="play-header">
            <button class="btn-back" id="btn-back">← Back</button>
            <div class="play-info">
              <h1 class="play-game-title">Play ${i.title} Unblocked</h1>
              <div class="play-cats">
                ${s.map(e=>`<span class="play-cat-tag">${n[e]||`🎮`} ${e}</span>`).join(``)}
              </div>
            </div>
            <button class="btn-fullscreen" id="btn-fullscreen">⛶ Fullscreen</button>
          </div>
          <div class="game-container" id="game-container">
            <div class="game-loading" id="game-loading">
              <div class="spinner" style="width:48px;height:48px;border-width:4px;"></div>
              <p>Loading <strong>${i.title}</strong>...</p>
            </div>
            <iframe id="game-frame" src="${a}"
              title="Play ${i.title} Unblocked | Unblocked Games G+"
              allowfullscreen frameborder="0"
              allow="fullscreen; autoplay; encrypted-media; gamepad"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-top-navigation allow-modals"
            ></iframe>
          </div>
          ${y(`Iklan Responsive unblockedgames - Article Play`)}
          ${R(i,s)}
          ${C()}
          ${u.length?`
          <div class="related-section">
            <div class="related-section-header">
              <h2 class="section-title">🎮 More ${c} Unblocked Games</h2>
            </div>
            <div class="related-grid" id="related-grid">
              ${u.map(e=>`
                <a class="game-card game-card-link mini" href="/game/${V(e.title)}.html" data-id="${e.id}" data-slug="${V(e.title)}" aria-label="Play ${e.title} unblocked">
                  <div class="card-thumb">
                    <img src="${t(e)}" alt="${e.title} unblocked" loading="lazy" decoding="async"
                      onerror="this.onerror=null;this.src='https://placehold.co/300x188/0d0a26/8b5cf6?text=${encodeURIComponent(e.title.slice(0,20))}'" />
                    <div class="card-overlay"><button class="btn-play" tabindex="-1">▶ Play</button></div>
                  </div>
                  <div class="card-info"><div class="card-title">${e.title}</div></div>
                </a>`).join(``)}
            </div>
          </div>`:``}
        </div>
      </div>
    </div>
  `,k(`game-frame`)?.addEventListener(`load`,()=>{k(`game-loading`).style.display=`none`}),k(`btn-back`)?.addEventListener(`click`,()=>{o(`/`)}),k(`btn-fullscreen`)?.addEventListener(`click`,()=>{let e=k(`game-container`);document.fullscreenElement?document.exitFullscreen():e?.requestFullscreen()}),k(`btn-menu`)?.addEventListener(`click`,()=>{k(`sidebar`)?.classList.toggle(`open`),k(`sidebar-overlay`)?.classList.toggle(`open`)}),k(`sidebar-close-btn`)?.addEventListener(`click`,()=>{k(`sidebar`)?.classList.remove(`open`),k(`sidebar-overlay`)?.classList.remove(`open`)}),k(`sidebar-overlay`)?.addEventListener(`click`,()=>{k(`sidebar`)?.classList.remove(`open`),k(`sidebar-overlay`)?.classList.remove(`open`)}),document.querySelector(`.sidebar`)?.addEventListener(`click`,e=>{let t=e.target.closest(`.cat-item`);t&&(E=t.dataset.cat,O=60,o(`/`))}),I(),b()}function G({id:e}){let t=l[e];if(!t){o(`/`);return}document.title=`${t.title} | Unblocked Games G+`;let n=document.querySelector(`meta[name="description"]`);n&&(n.content=`Read our ${t.title} policy at Unblocked Games G+.`),k(`app`).innerHTML=`
    ${P()}
    <div class="layout">
      ${N()}
      <div class="main-content">
        <div class="static-page-container">
          <div class="static-card">
            ${t.content}
          </div>
        </div>
        ${F()}
      </div>
    </div>
  `,U(),I()}a(`/`,()=>B()),a(`/play`,({id:e})=>W({id:e})),a(`/page`,({id:e})=>G({id:e})),document.addEventListener(`DOMContentLoaded`,async()=>{k(`app`).innerHTML=`
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;background:#08051a;">
      <div class="spinner" style="width:48px;height:48px;border-width:4px;"></div>
      <p style="color:#9ca3af;font-family:Inter,sans-serif;font-size:0.95rem;">Loading Unblocked Games G+...</p>
    </div>`,await A(),c(),d()}),document.addEventListener(`click`,e=>{e.target.closest(`#btn-install-app`)&&f()});
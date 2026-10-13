// PWA client for all pages (SPA, static game pages, all-games catalog)
(function () {
  let deferredPrompt = null;

  // Standalone mode check (already installed app)
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true;

  if (isStandalone) {
    document.querySelectorAll('.btn-install-app').forEach(btn => {
      btn.style.display = 'none';
    });
    return;
  }

  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.warn('[SW] Registration warning:', err);
      });
    });
  }

  // Capture beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    window.__pwaDeferredPrompt = e;

    setTimeout(() => {
      showInstallBanner();
    }, 2500);
  });

  // App installed event
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    window.__pwaDeferredPrompt = null;
    hideInstallBanner();
    document.querySelectorAll('.btn-install-app').forEach(btn => {
      btn.style.display = 'none';
    });
  });

  function promptInstall() {
    const promptEvent = deferredPrompt || window.__pwaDeferredPrompt;
    if (promptEvent) {
      promptEvent.prompt();
      promptEvent.userChoice.then(choice => {
        if (choice.outcome === 'accepted') {
          hideInstallBanner();
          document.querySelectorAll('.btn-install-app').forEach(btn => {
            btn.style.display = 'none';
          });
        }
        deferredPrompt = null;
        window.__pwaDeferredPrompt = null;
      });
    } else {
      alert('To install Unblocked Games G+:\n• On Chrome/Edge: Click the install icon (⊕) in the browser address bar.\n• On iPhone/iPad: Tap Share (⎋) and choose "Add to Home Screen".\n• On Android: Tap Menu (⋮) and choose "Install App" or "Add to Home Screen".');
    }
  }

  window.promptPwaInstall = promptInstall;

  // Delegate click on any install button
  document.addEventListener('click', e => {
    if (e.target.closest('#btn-install-app, .btn-install-app')) {
      promptInstall();
    }
  });

  function showInstallBanner() {
    if (isStandalone) return;
    if (localStorage.getItem('pwa_prompt_dismissed') === '1') return;
    if (document.getElementById('pwa-install-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'pwa-install-banner';
    banner.className = 'pwa-install-banner';
    banner.innerHTML = `
      <img src="/icon-192.png" alt="Unblocked Games G+" class="pwa-banner-icon" />
      <div class="pwa-banner-content">
        <div class="pwa-banner-title">Install Unblocked Games G+</div>
        <div class="pwa-banner-desc">Play 700+ games directly in fullscreen without browser bars!</div>
      </div>
      <div class="pwa-banner-actions">
        <button class="pwa-btn-install" id="pwa-banner-install-btn" type="button">📲 Install</button>
        <button class="pwa-btn-close" id="pwa-banner-close-btn" type="button" aria-label="Dismiss">✕</button>
      </div>
    `;

    document.body.appendChild(banner);

    document.getElementById('pwa-banner-install-btn')?.addEventListener('click', () => {
      promptInstall();
    });

    document.getElementById('pwa-banner-close-btn')?.addEventListener('click', () => {
      hideInstallBanner();
      localStorage.setItem('pwa_prompt_dismissed', '1');
    });
  }

  function hideInstallBanner() {
    const banner = document.getElementById('pwa-install-banner');
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(20px)';
      banner.style.transition = 'all 0.3s ease';
      setTimeout(() => banner.remove(), 300);
    }
  }

  // Display banner after 4 seconds on any page if not dismissed
  setTimeout(() => {
    if (!isStandalone && localStorage.getItem('pwa_prompt_dismissed') !== '1') {
      showInstallBanner();
    }
  }, 4000);
})();

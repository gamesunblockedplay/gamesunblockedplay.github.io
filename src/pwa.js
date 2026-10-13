// ──── PWA Controller & Service Worker Registration ────────

let deferredPrompt = null;

export function initPWA() {
  // 1. Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          // Check for updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker?.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('[PWA] New version available.');
              }
            });
          });
        })
        .catch(err => {
          console.warn('[PWA] SW registration error:', err);
        });
    });
  }

  // Check if already running as installed standalone app
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone === true;

  if (isStandalone) {
    console.log('[PWA] Running in standalone app mode');
    return;
  }

  // 2. Listen for beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', e => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    deferredPrompt = e;

    // Show header install button if exists
    updateInstallButtons(true);

    // Show banner after 3 seconds if not previously dismissed
    setTimeout(() => {
      showInstallBanner();
    }, 3000);
  });

  // 3. Listen for appinstalled
  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed successfully');
    deferredPrompt = null;
    updateInstallButtons(false);
    hideInstallBanner();
  });
}

export function promptInstall() {
  if (!deferredPrompt) {
    // Fallback if browser doesn't support beforeinstallprompt (e.g. Safari / Firefox)
    alert('To install Unblocked Games G+:\n• On Chrome/Edge: Click the install icon (⊕) in the browser address bar.\n• On iPhone/iPad: Tap Share and choose "Add to Home Screen".\n• On Android: Tap Menu (⋮) and choose "Install App" or "Add to Home Screen".');
    return;
  }

  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === 'accepted') {
      console.log('[PWA] User accepted the install prompt');
      updateInstallButtons(false);
      hideInstallBanner();
    }
    deferredPrompt = null;
  });
}

function updateInstallButtons(available) {
  const btns = document.querySelectorAll('.btn-install-app');
  btns.forEach(btn => {
    if (available) {
      btn.style.display = 'inline-flex';
    } else {
      btn.style.display = 'none';
    }
  });
}

function showInstallBanner() {
  if (localStorage.getItem('pwa_prompt_dismissed') === '1') return;
  if (document.getElementById('pwa-install-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'pwa-install-banner';
  banner.className = 'pwa-install-banner';
  banner.innerHTML = `
    <img src="/icon-192.png" alt="Unblocked Games G+" class="pwa-banner-icon" />
    <div class="pwa-banner-content">
      <div class="pwa-banner-title">Install Unblocked Games G+</div>
      <div class="pwa-banner-desc">Play 700+ games directly from your desktop or phone, full screen without browser bars!</div>
    </div>
    <div class="pwa-banner-actions">
      <button class="pwa-btn-install" id="pwa-banner-install-btn">📲 Install</button>
      <button class="pwa-btn-close" id="pwa-banner-close-btn" aria-label="Dismiss">✕</button>
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

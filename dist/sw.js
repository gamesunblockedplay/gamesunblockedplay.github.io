const CACHE_NAME = 'ubg-pwa-v1';

// Core assets to pre-cache on install
const PRECACHE_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/manifest.json',
  '/favicon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/all-games.html',
  '/pwa-client.js'
];

// Domains that should ALWAYS bypass service worker cache (ads, analytics, dynamic CDN)
const BYPASS_DOMAINS = [
  'grop.net',
  'biggerbreakerfind.com',
  'motionlesspatronage.com',
  'pagead2.googlesyndication.com',
  'googleads.g.doubleclick.net',
  'adservice.google.com',
  'histats.com',
  'googlesyndication.com',
  'google.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS).catch(err => {
        console.warn('[SW] Pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Bypass ad scripts, analytics, and external APIs completely
  if (BYPASS_DOMAINS.some(d => url.hostname.includes(d))) {
    return;
  }

  // Handle HTML navigation (Network first, fallback to cache)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => {
          return caches.match(req).then(cached => {
            return cached || caches.match('/') || caches.match('/all-games.html');
          });
        })
    );
    return;
  }

  // Handle static assets (CSS, JS, images, fonts, games.json)
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/assets/') ||
     url.pathname.endsWith('.json') ||
     url.pathname.endsWith('.svg') ||
     url.pathname.endsWith('.png') ||
     url.pathname.endsWith('.jpg') ||
     url.pathname.endsWith('.webp'))
  ) {
    event.respondWith(
      caches.match(req).then(cached => {
        const fetchPromise = fetch(req).then(networkRes => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          }
          return networkRes;
        }).catch(() => null);

        return cached || fetchPromise;
      })
    );
    return;
  }

  // Default network with fallback
  event.respondWith(
    fetch(req).catch(() => caches.match(req))
  );
});

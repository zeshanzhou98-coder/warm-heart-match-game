const CACHE_NAME = 'mili-workspace-v2';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './assets/avatar.jpg',
  './assets/bg.jpg',
  './assets/apple-touch-icon.png',
  './assets/icon-192.png',
  './assets/menu-panda.jpg',
  './assets/menu-mouse.jpg',
  './assets/menu-cat.jpg',
  './assets/menu-english.jpg',
  './assets/menu-titles.jpg',
  './assets/menu-penguin.jpg',
  './assets/menu-exercise.jpg',
  './assets/menu-editing.jpg',
  './assets/menu-wallet.jpg',
  './assets/menu-review.jpg',
  './assets/menu-tools.jpg',
  './assets/menu-comm.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetched = fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});

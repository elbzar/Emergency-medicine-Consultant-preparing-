const CACHE_NAME = 'em-consultant-ref-v1';
// List of all the files and CDN links that need to be cached
const urlsToCache = [
  '/',
  '/index.html',
  // The icon files from manifest.json
  'https://www.gstatic.com/images/branding/product/1x/google_cloud_48dp.png',
  'https://www.gstatic.com/images/branding/product/1x/google_cloud_96dp.png',
  'https://www.gstatic.com/images/branding/product/1x/google_cloud_192dp.png',
  // CDN assets
  'https://cdn.tailwindcss.com',
  'https://aistudiocdn.com/rxjs@^7.8.2?conditions=es2015',
  'https://aistudiocdn.com/rxjs@^7.8.2/operators?conditions=es2015',
  'https://aistudiocdn.com/rxjs@^7.8.2/ajax?conditions=es2015',
  'https://aistudiocdn.com/rxjs@^7.8.2/webSocket?conditions=es2015',
  'https://aistudiocdn.com/rxjs@^7.8.2/testing?conditions=es2015',
  'https://aistudiocdn.com/rxjs@^7.8.2/fetch?conditions=es2015',
  'https://next.esm.sh/@angular/core@^21.0.0?external=rxjs',
  'https://next.esm.sh/@angular/compiler@^21.0.0?external=rxjs',
  'https://next.esm.sh/@angular/platform-browser@^21.0.0?external=rxjs',
  'https://next.esm.sh/@angular/common@^21.0.0?external=rxjs',
  'https://next.esm.sh/@angular/common@^21.0.0/http?external=rxjs'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Using `fetch` and `put` for each URL individually is more robust
        // for CDN resources which might return opaque responses.
        const promises = urlsToCache.map(url => {
          return fetch(url, { mode: 'no-cors' }).then(response => {
            return cache.put(url, response);
          });
        });
        return Promise.all(promises);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache, go to network
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
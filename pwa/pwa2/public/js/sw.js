console.log("sw");
const CACHE_NAME = 'sw-cache-example';
const toCahce = [
  '/',
  './offline.html',
  '../images/pwa-icon-ios.png',
  '../images/spash-screen-image-512x512-pwa.png',
  '../index.html',
  './status.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(toCahce);
      })
      .then(self.skipWaiting())
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(keyList => {
        return Promise.all(keyList.map(key => {
          if(key !== CACHE_NAME) {
            console.log("Service Work removing old cache", key);
            return caches.delete(key);
          }
        }))
      })
      .then(() => self.clients.claim())
      .catch(error => {
        console.error(error);
      })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.open(CACHE_NAME)
          .then(cache => {
            return cache.match(event.request)
          })
      })
  );
});

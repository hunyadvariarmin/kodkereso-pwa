const CACHE_NAME = 'kodkereso-v3';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://unpkg.com/xlsx/dist/xlsx.full.min.js',
  'https://unpkg.com/html5-qrcode'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(caches.match(evt.request).then((res) => res || fetch(evt.request)));
});
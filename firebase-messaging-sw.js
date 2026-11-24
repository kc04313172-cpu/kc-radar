importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

var cfg = {};
try { cfg = JSON.parse(new URL(self.location.href).searchParams.get('cfg') || '{}'); } catch (e) {}
if (cfg.apiKey) {
  firebase.initializeApp(cfg);
  firebase.messaging();
}

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });


self.addEventListener('install', e=>{
 e.waitUntil(caches.open('snpi-cache').then(c=>c.addAll([
   'snpi.html','manifest.json','snpi.jpg'
 ])));
});
self.addEventListener('fetch', e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});

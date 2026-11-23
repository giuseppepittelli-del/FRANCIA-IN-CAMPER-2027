const CACHE='camper-francia-dashboard-v12-icon';
const FILES=["./","./index.html","./manifest.json","./icon.png","./icon.svg","./images/chambord.jpg","./images/colmar.jpg","./images/paris.jpg","./images/etretat.jpg","./images/chenonceau.jpg","./images/annecy.jpg","./images/saint-malo.jpg","./images/mont-saint-michel.jpg","./images/versailles.jpg"];

self.addEventListener('install',e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c=>c.addAll(FILES))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys.filter(k=>k.startsWith('camper-francia-dashboard-')&&k!==CACHE)
          .map(k=>caches.delete(k))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
const CACHE='camper-francia-dashboard-v11-osm-date';const FILES=["./", "./index.html", "./manifest.json", "./icon.svg", "./images/chambord.jpg", "./images/colmar.jpg", "./images/paris.jpg", "./images/etretat.jpg", "./images/chenonceau.jpg", "./images/annecy.jpg", "./images/saint-malo.jpg", "./images/mont-saint-michel.jpg", "./images/versailles.jpg"];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('camper-francia-2027-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

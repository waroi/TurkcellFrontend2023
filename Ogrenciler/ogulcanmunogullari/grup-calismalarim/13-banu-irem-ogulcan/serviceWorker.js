const staticTodoList = 'todo-list-v1';
const assets = ['/', '/index.html', '/css/main.css', '/todo.js'];

self.addEventListener('install', (installEvent) => {
 installEvent.waitUntil(
  caches.open(staticTodoList).then((cache) => {
   cache.addAll(assets);
  }),
 );
});
self.addEventListener('fetch', (fetchEvent) => {
 fetchEvent.respondWith(
  caches.match(fetchEvent.request).then((res) => {
   return res || fetch(fetchEvent.request);
  }),
 );
});

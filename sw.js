 // SysPizza Digital v1.42: registro PWA, sem cache nem interceptacao de pedidos.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

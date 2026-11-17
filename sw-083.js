// Service worker da Di Vitto (083): sem cache de pedidos ou dados pessoais.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

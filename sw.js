// サービスワーカー: ホーム画面インストールを有効にするための最小構成
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {
  // 通常どおりインターネットから取得(オフライン対応は最小限)
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

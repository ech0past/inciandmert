self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};

  const title = data.title || 'Bildirim Başlığı';
  const options = {
    body: data.body || 'Bildirim içeriği',
    icon: data.icon || 'img/icon.png', // varsa ikon yolu
    badge: data.badge || 'img/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

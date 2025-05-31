self.addEventListener('push', event => {
  const data = event.data.json();
  const title = data.title || 'Bildirim';
  const options = {
    body: data.body,
    icon: data.icon || 'img/pengu.jpg'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

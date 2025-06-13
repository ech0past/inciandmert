// sw.js
self.addEventListener("push", function(event) {
  const veri = event.data.json();
  self.registration.showNotification(veri.title, {
    body: veri.body,
    icon: veri.icon
  });
});

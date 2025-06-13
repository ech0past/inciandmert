self.addEventListener("push", function (event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: data.icon || "https://ech0past.github.io/img/inciandme.jpg",
  };

  event.waitUntil(
    self.registration.showNotification(data.title || "Yeni Bildirim", options)
  );
});

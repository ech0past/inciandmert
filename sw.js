self.addEventListener("push", function (event) {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: data.icon || "img/kedi.gif",
  };

  event.waitUntil(
    self.registration.showNotification(data.title || "Bildirim", options)
  );
});

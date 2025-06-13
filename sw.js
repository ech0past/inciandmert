self.addEventListener("push", function (event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: data.icon || "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  };

  event.waitUntil(
    self.registration.showNotification(data.title || "Yeni Bildirim", options)
  );
});

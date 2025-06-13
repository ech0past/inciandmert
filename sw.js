self.addEventListener("push", function (event) {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: data.icon || "https://i.hizliresim.com/eauqoc6.PNG",
  };

  event.waitUntil(
    self.registration.showNotification(data.title || "Yeni Bildirim", options)
  );
});
